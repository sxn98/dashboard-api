import { AutoRoleConfig } from "src/typeorm/entities/AutoRoleConfig";



export interface IGuildsAutoRoleService{

    getAutoRoleConfig(GuildID:string): Promise<AutoRoleConfig[]>
    AddAutoRole(GuildID:string, RoleID:string, ActivityName:string):Promise<AutoRoleConfig>
    DeleteAutoRole(GuildID:string, RoleID:string, ActivityName:string):Promise<AutoRoleConfig[]>
}