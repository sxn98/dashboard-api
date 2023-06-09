import { Injectable } from "@nestjs/common";
import { IDiscordHttpService } from "../interfaces/discord.http";
import axios from 'axios';


@Injectable()
export class DiscordHttpService implements IDiscordHttpService{
    fetchBotGuilds() {
        const TOKEN=process.env.BOT_TOKEN;
        return axios.get('https://discord.com/api/v10/users/@me/guilds',{
            headers:{
                Authorization:`Bot ${TOKEN}`,
            }
        })
    }
    fetchUserGuilds(accessToken:string) {
        return axios.get('https://discord.com/api/v10/users/@me/guilds',{
         headers:{
             Authorization: `Bearer ${accessToken}`,
         },
        });
     }

}