import { Controller, Get, Inject, Param } from "@nestjs/common";
import { IDiscordService } from "../interfaces/discord";
import { AuthUser } from "src/auth/utils/Decorators";
import { UserConfig } from "src/typeorm/entities/UserConfig";

@Controller('discord')
export class DiscordController{
    constructor(@Inject('DISCORD_SERVICE') private readonly discordService:IDiscordService){}
   
    @Get('guilds')
    getMutualGuilds(@AuthUser() user:UserConfig){ // datorita decoratorului pentru AuthUser, putem prelua access token de oriunde

        return this.discordService.getMutualGuilds(user.accessToken);
    }

    @Get('guilds/:GuildID/channels')
    async getGuildChannels(@Param('GuildID') GuildID:string){
        const {data}= await this.discordService.getGuildChannels(GuildID);
        return data.filter((channels) => channels.type===0);
    }
}