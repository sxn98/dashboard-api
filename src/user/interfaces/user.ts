import { UserConfig } from "src/typeorm/entities/UserConfig";
import { UpdateUserDetails, UserDetails } from "src/types/types";

export interface IUserService{
    createUser(details:UserDetails): Promise<UserConfig>;
    findUser(DiscordID:string): Promise<UserConfig | undefined>;
    updateUser(user:UserConfig,details:UpdateUserDetails):Promise<UserConfig>;
}