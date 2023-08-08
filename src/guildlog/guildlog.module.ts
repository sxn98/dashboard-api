import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogConfig } from 'src/typeorm/entities/LogConfig';
import { WebSocketModule } from 'src/websocket/websocket.module';
import { GuildLogController } from './controllers/guildlog.controller';
import { GuildLogService } from './services/guildlog.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([LogConfig]),
        WebSocketModule,
    ],
    controllers:[GuildLogController],
    providers:[
        {
            provide:'GUILDLOG_SERVICE',
            useClass:GuildLogService,
        },
    ]
})
export class GuildlogModule {}
