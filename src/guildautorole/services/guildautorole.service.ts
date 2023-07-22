import { GuildConfig } from "src/typeorm/entities/GuildConfig";
import { IGuildsService } from "../../guilds/interfaces/guilds";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IGuildsAutoRoleService } from "../interfaces/guildsautorole";
import { AutoRoleConfig } from "src/typeorm/entities/AutoRoleConfig";

@Injectable()
export class GuildAutoRoleService implements IGuildsAutoRoleService{
    constructor(@InjectRepository(AutoRoleConfig) private readonly guildAutoRoleConfigRepository: Repository<AutoRoleConfig>){}

    getAutoRoleConfig(GuildID: string): Promise<AutoRoleConfig[]> {

        return this.guildAutoRoleConfigRepository.findBy({GuildID})
    }

    async AddAutoRole(GuildID: string, RoleID: string, ActivityName: string): Promise<AutoRoleConfig> {
        const autoroleconfig = new AutoRoleConfig();
        autoroleconfig.GuildID=GuildID;
        autoroleconfig.RoleID=RoleID
        autoroleconfig.ActivityName=ActivityName
        
        // console.log(autoroleconfig)
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        return this.guildAutoRoleConfigRepository.save(autoroleconfig)

    }
    async DeleteAutoRole(GuildID: string, RoleID: string, ActivityName: string) {
        // console.log('s-au sters: ')
        // console.log(GuildID)
        // console.log(RoleID)
        // console.log(ActivityName)
        this.guildAutoRoleConfigRepository.delete({GuildID,RoleID,ActivityName})
        return this.guildAutoRoleConfigRepository.findBy({GuildID,RoleID,ActivityName});
    }
}