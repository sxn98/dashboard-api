import { AutoRoleConfig } from "src/typeorm/entities/AutoRoleConfig";
import { DeleteResult } from "typeorm";


export interface IGuildsAutoRoleService{

    getAutoRoleConfig(GuildID:string): Promise<AutoRoleConfig[]>
    AddAutoRole(GuildID:string, RoleID:string, ActivityName:string):Promise<AutoRoleConfig>
    DeleteAutoRole(GuildID:string, RoleID:string, ActivityName:string):Promise<AutoRoleConfig[]>
}