import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Post } from "@nestjs/common";
import { IGuildsAutoRoleService } from "../interfaces/guildsautorole";
import { WebsocketHandler } from "src/websocket/socket";
import { AutoRoleConfig } from "src/typeorm/entities/AutoRoleConfig";

@Controller('guilds')
export class AutoRoleGuildsController{

    constructor(
        @Inject('GUILDAUTOROLE_SERVICE') private readonly guildsAutoRoleService: IGuildsAutoRoleService,
        @Inject(WebsocketHandler) private readonly wsHandler:WebsocketHandler,
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
                this.wsHandler.autoRoleAdd(config)
                // console.log('bbbbbbbbbbbbbbbbbbbbbbbb')
                // console.log(config)
                return config;
             }
        @Delete('autoroleconfig/:GuildID/config/remove')
        async DeleteAutoRole(
            @Param('GuildID') GuildID:string,
            @Body('RoleID') RoleID:string,
            @Body('ActivityName') ActivityName:string,
        ){
            
            const config=await this.guildsAutoRoleService.DeleteAutoRole(GuildID,RoleID,ActivityName)
            // console.log('teeeest')
            // console.log(betterConfig)
            this.wsHandler.autoRoleDelete(config)
            return config
            
        }

}