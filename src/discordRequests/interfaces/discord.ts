import { AxiosResponse } from "axios";
import { PartialGuildChannel } from "src/types/types";

export interface IDiscordService{
    getBotGuilds();
    getUserGuilds(accessToken:string);
    getMutualGuilds(accessToken:string);
    getGuildChannels(GuildID:string):Promise<AxiosResponse<PartialGuildChannel[]>>;
}