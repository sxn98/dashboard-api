import { InjectRepository } from "@nestjs/typeorm";
import { IGuildsLogService } from "../interfaces/guildlog";
import { LogConfig } from "src/typeorm/entities/LogConfig";
import { Repository } from "typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class GuildLogService implements IGuildsLogService{
    constructor(@InjectRepository(LogConfig) private readonly guildLogConfigRepository:Repository<LogConfig>){}
    getLogConfig(GuildID: string): Promise<LogConfig> {
        return this.guildLogConfigRepository.findOneBy({GuildID})
    }
    async updateLogConfig(GuildID: string, LogChannel: string, MsgDeletedContent: boolean, MsgEditedContent: boolean, NicknameChanges: boolean, SelfDeletedEditedMessage: boolean, UserForcefullyDisconnected: boolean, UserForcefullyMoved: boolean): Promise<LogConfig> {
        const guildLogConfiguration=await this.getLogConfig(GuildID)
        if(!guildLogConfiguration) throw new HttpException('Configuratia nu a fost gasita', HttpStatus.BAD_REQUEST)

        return this.guildLogConfigRepository.save({
            ...guildLogConfiguration,
            LogChannel,
            MsgDeletedContent,
            MsgEditedContent,
            NicknameChanges,
            SelfDeletedEditedMessage,
            UserForcefullyDisconnected,
            UserForcefullyMoved,
        })
    }
}