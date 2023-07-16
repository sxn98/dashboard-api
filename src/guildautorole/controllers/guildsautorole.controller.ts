import { Body, Controller, Get, HttpException, HttpStatus, Inject, Param, Post } from "@nestjs/common";
import { IGuildsAutoRoleService } from "../interfaces/guildsautorole";

@Controller('guilds')
export class AutoRoleGuildsController{


    constructor(
        @Inject('GUILDAUTOROLE_SERVICE') private readonly guildsAutoRoleService: IGuildsAutoRoleService,
        ){}

        @Get('autoroleconfig/:GuildID')
        async getAutoRoleGuildConfig(@Param('GuildID') GuildID:string){
            const autoroleguildConfigFound=await this.guildsAutoRoleService.getAutoRoleConfig(GuildID);
            console.log(autoroleguildConfigFound)
            if(!autoroleguildConfigFound) throw new HttpException('Configuratia rolurilor nu a fost gasita', HttpStatus.NOT_FOUND)
           // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa')
            return autoroleguildConfigFound;
        }
        @Post('autoroleconfig/:GuildID/config')
        async AddAutoRole(
             @Param('GuildID') GuildID:string,
             @Body('RoleID') RoleID:string,
             @Body('ActivityName') ActivityName:string,
             ) {
                // console.log(GuildID)
                // console.log(RoleID)
                // console.log(ActivityName)
                const config=await this.guildsAutoRoleService.AddAutoRole(GuildID,RoleID,ActivityName)
            //     const config = await this.guildsService.updateGuildPrefix(GuildID,prefix);
            //     this.wsHandler.guildPrefixUpdate(config)
            //     return config;
             }

}