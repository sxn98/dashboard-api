import { Inject, Injectable } from "@nestjs/common";
import { IDiscordService } from "../interfaces/discord";
import { IDiscordHttpService } from "../interfaces/discord.http";

@Injectable()
export class DiscordService implements IDiscordService{ // preluam serverele de la user, bot si cele comune
    constructor(@Inject('DISCORD_HTTP_SERVICE') private readonly discordHttpService: IDiscordHttpService){}
    
    getBotGuilds() {
        return this.discordHttpService.fetchBotGuilds();
    }
    getUserGuilds(accessToken:string) {
        return this.discordHttpService.fetchUserGuilds(accessToken);
    }
    async getMutualGuilds(accessToken:string) {
       const {data:userGuilds} = await this.getUserGuilds(accessToken);
       const {data:botGuilds}= await this.getBotGuilds();
       return {userGuilds, botGuilds};
    }
    
}