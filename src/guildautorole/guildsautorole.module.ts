import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoRoleConfig } from 'src/typeorm/entities/AutoRoleConfig';
import { AutoRoleGuildsController } from './controllers/guildsautorole.controller';
import { GuildAutoRoleService } from './services/guildautorole.service';
import { WebSocketModule } from 'src/websocket/websocket.module';

@Module({
    imports:[
        TypeOrmModule.forFeature([AutoRoleConfig]),
        WebSocketModule,
    ],
    
    controllers:[AutoRoleGuildsController],
    providers:[
        {
            provide:'GUILDAUTOROLE_SERVICE',
            useClass:GuildAutoRoleService,
        },
    ]
})
export class GuildsAutoRoleModule {}