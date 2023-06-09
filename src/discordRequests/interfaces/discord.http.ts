export interface IDiscordHttpService{
    fetchBotGuilds();
    fetchUserGuilds(accessToken:string);
}