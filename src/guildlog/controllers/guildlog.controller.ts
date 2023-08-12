import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Post } from "@nestjs/common";
import { IGuildsLogService } from "../interfaces/guildlog";
import { WebsocketHandler } from "src/websocket/socket";

@Controller('guilds')
export class GuildLogController{
    constructor(
        @Inject('GUILDLOG_SERVICE') private readonly guildsLogService:IGuildsLogService,
        @Inject(WebsocketHandler) private readonly wsHandler:WebsocketHandler,
    ){}

    @Get('logconfig/:GuildID')
    async getLogConfig(@Param('GuildID') GuildID:string){
        const logConfigFound=await this.guildsLogService.getLogConfig(GuildID);
        console.log(logConfigFound)
        if(!logConfigFound) throw new HttpException('Configuratia log-ului nu a fost gasita', HttpStatus.NOT_FOUND)
        return logConfigFound;
    }
    @Post('logconfig/:GuildID/update')
    async updateLogConfig(
        @Param('GuildID') GuildID:string,
        @Body('LogChannel') LogChannel:string,
        @Body('MsgDeletedContent') MsgDeletedContent:boolean,
        @Body('MsgEditedContent') MsgEditedContent:boolean,
        @Body('NicknameChanges') NicknameChanges:boolean,
        @Body('UserForcefullyDisconnected') UserForcefullyDisconnected:boolean,
        @Body('UserForcefullyMoved') UserForcefullyMoved:boolean
     
    ){
        const config=await this.guildsLogService.updateLogConfig(GuildID,LogChannel,MsgDeletedContent,MsgEditedContent,NicknameChanges,UserForcefullyDisconnected,UserForcefullyMoved)
        this.wsHandler.logUpdate(config)
        return config;
    }
}