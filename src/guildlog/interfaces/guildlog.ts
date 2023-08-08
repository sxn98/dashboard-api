import { LogConfig } from "src/typeorm/entities/LogConfig";

export interface IGuildsLogService{
    getLogConfig(GuildID:string): Promise<LogConfig>
    updateLogConfig(GuildID:string,LogChannel:string,MsgDeletedContent:boolean,MsgEditedContent:boolean,NicknameChanges:boolean,SelfDeletedEditedMessage:boolean,UserForcefullyDisconnected:boolean,UserForcefullyMoved:boolean):Promise<LogConfig>
}