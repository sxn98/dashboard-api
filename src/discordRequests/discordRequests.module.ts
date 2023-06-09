import { Module } from '@nestjs/common';
import { DiscordController } from './controllers/discord.controller';
import { DiscordService } from './services/discord.service';
import { DiscordHttpService } from './services/discord-http.service';

@Module({
    controllers:[DiscordController],
    providers:[
        {
            provide:'DISCORD_SERVICE',
            useClass:DiscordService,
        },
        {
            provide:'DISCORD_HTTP_SERVICE',
            useClass:DiscordHttpService,
        }
    ]
})
export class DiscordRequestsModule {}
