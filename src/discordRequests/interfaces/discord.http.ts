import { AxiosResponse } from "axios";
import { PartialGuild, PartialGuildChannel } from "src/types/types";

export interface IDiscordHttpService{
    fetchBotGuilds(): Promise<AxiosResponse<PartialGuild[]>>;
    fetchUserGuilds(accessToken:string):Promise<AxiosResponse<PartialGuild[]>>;
    fetchGuildChannels(GuildID:string): Promise<AxiosResponse<PartialGuildChannel[]>>;
}