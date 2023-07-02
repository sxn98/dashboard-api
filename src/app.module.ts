import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildConfig } from './typeorm/entities/GuildConfig';
import { UserConfig } from './typeorm/entities/UserConfig';
import { SessionConfig } from './typeorm/entities/SessionConfig';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { DiscordRequestsModule } from './discordRequests/discordRequests.module';
import { GuildsModule } from './guilds/guilds.module';
import { WebSocketModule } from './websocket/websocket.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env.development',
    }),
    PassportModule.register({session:true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE,
      synchronize: true,  // cand modificam entitatile se updateaza automat in tabelele din BD 
      entities:[GuildConfig,UserConfig,SessionConfig],        // (daca modificam dintr-o entitate o coloana, se va modifica si in mysql)
    }),
    AuthModule,
    UserModule,
    DiscordRequestsModule,
    GuildsModule,
    WebSocketModule,                    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
