import { Injectable } from "@nestjs/common";
import { IDiscordHttpService } from "../interfaces/discord.http";
import axios from 'axios';
import { PartialGuild, PartialGuildChannel } from "src/types/types";


@Injectable()
export class DiscordHttpService implements IDiscordHttpService{
    async fetchBotGuilds() {
        const TOKEN=process.env.BOT_TOKEN;
        return await axios.get<PartialGuild[]>('https://discord.com/api/v10/users/@me/guilds',{
            headers:{
                Authorization:`Bot ${TOKEN}`,
            }
        })
    }
    
    async fetchUserGuilds(accessToken:string) {
        return await axios.get<PartialGuild[]>('https://discord.com/api/v10/users/@me/guilds',{
         headers:{
             Authorization: `Bearer ${accessToken}`,
         },
        });
     }

     fetchGuildChannels(GuildID: string) {
        const TOKEN=process.env.BOT_TOKEN;
         return axios.get<PartialGuildChannel[]>(`https://discord.com/api/v10/guilds/${GuildID}/channels`, {
            headers:{
                Authorization: `Bot ${TOKEN}`,
            },
         });
     }
}

// console.log('astept o secunda')
//     const asteapta= async() => await new Promise(resolve=> setTimeout(resolve,5000));
//     asteapta();
//     console.log('am asteptat')