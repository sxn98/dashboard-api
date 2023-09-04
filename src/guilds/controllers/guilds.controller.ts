import { Body, Controller, Get, HttpException, HttpStatus, Inject, Param, Post } from "@nestjs/common";
import { IGuildsService } from "../interfaces/guilds";
import { WebsocketHandler } from "src/websocket/socket";



@Controller('guilds')
export class GuildsController{


    constructor(
        @Inject('GUILD_SERVICE') private readonly guildsService: IGuildsService,
        @Inject(WebsocketHandler) private readonly wsHandler:WebsocketHandler,
        
        ){}

    @Get('config/:GuildID') // folosim un parametru de tip ruta pentru a lua detaliile unui anumit server
    async getGuildConfig(@Param('GuildID') GuildID:string){
        const guildConfigFound = await this.guildsService.getGuildConfig(GuildID);
        if(!guildConfigFound) throw new HttpException('Configuratia nu a fost gasita', HttpStatus.NOT_FOUND);

        return guildConfigFound;
    }
    
    @Post(':GuildID/config/prefix')
    async updateGuildPrefix(
        @Param('GuildID') GuildID:string,
        @Body('prefix') prefix:string,
        ) {
            //console.log(GuildID, prefix);

            const config = await this.guildsService.updateGuildPrefix(GuildID,prefix);
            this.wsHandler.guildPrefixUpdate(config)
            return config;
        }

    @Post(':GuildID/config/welcome')
    async updateWelcomeChannel(
        @Param('GuildID') GuildID:string,
        @Body('channelID') channelID:string,
        @Body('welcomeString') welcomeString:string
        ){ 
            const config=await this.guildsService.updateWelcomeChannel(GuildID,channelID,welcomeString)
            this.wsHandler.guildWelcomeChannelUpdate(config)
            return config;
    }


}