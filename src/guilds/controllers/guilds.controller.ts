import { Body, Controller, Get, HttpException, HttpStatus, Inject, Param, Post } from "@nestjs/common";
import { IGuildsService } from "../interfaces/guilds";

@Controller('guilds')
export class GuildsController{
    constructor(@Inject('GUILD_SERVICE') private readonly guildsService: IGuildsService){}

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
            console.log(GuildID, prefix);
            return this.guildsService.updateGuildPrefix(GuildID,prefix);
        }
}