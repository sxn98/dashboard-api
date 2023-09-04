import { GuildConfig } from "src/typeorm/entities/GuildConfig";

export interface IGuildsService{
    getGuildConfig(GuildID:string): Promise<GuildConfig>
    updateGuildPrefix(GuildID:string, prefix:string): Promise<GuildConfig>;
    updateWelcomeChannel(GuildID:string, WelcomeChannelID:string,WelcomeChannelString:string)
}