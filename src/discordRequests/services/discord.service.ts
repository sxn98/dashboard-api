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
       // console.log('bbbbbbbbbbbbbbbbbbbbbbbb')
       
        try {
            const {data:userGuilds} = await this.getUserGuilds(accessToken); 
            const {data:botGuilds}= await this.getBotGuilds();

            // filtram serverele in care nu suntem admin
            const AdminUserGuilds=userGuilds.filter(
                ({permissions})=>(parseInt(permissions) & 0x8) ===0x8,// 0x8 reprezinta codul pentru a vedea daca userul are drepturi de administrator
            );
            //console.log(AdminUserGuilds)

            const mutualGuilds= AdminUserGuilds.filter((guild)=>
                botGuilds.some((botGuild)=>botGuild.id===guild.id) // cautam serverele comune dintre user si bot in care suntem si administrator
                
       )    
      // console.log(mutualGuilds);
       //return {userGuilds, botGuilds};
        return {mutualGuilds};
        } catch (error) {
            console.log(error)
        }
    }

    getGuildChannels(GuildID: string) {
        return this.discordHttpService.fetchGuildChannels(GuildID);
    }   
}