import { Module } from '@nestjs/common';
import { GuildsController } from './controllers/guilds.controller';
import { GuildsService } from './services/guilds.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildConfig } from 'src/typeorm/entities/GuildConfig';
import { WebSocketModule } from 'src/websocket/websocket.module';

@Module({
    imports:[
        TypeOrmModule.forFeature([GuildConfig]),
        WebSocketModule,
    ],
    controllers:[GuildsController],
    providers:[
        {
            provide:'GUILD_SERVICE',
            useClass:GuildsService,
        }
    ]
})
export class GuildsModule {}
