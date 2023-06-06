import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserConfig } from "src/typeorm/entities/UserConfig";
import { Done } from "src/types/types";
import { IUserService } from "src/user/interfaces/user";

export class SessionSerializer extends PassportSerializer{
    constructor(@Inject('USER_SERVICE') private readonly userService:IUserService){
        super();
    }
    serializeUser(user:UserConfig, done:Done){
        done(null,user);
    }
    async deserializeUser(user:UserConfig, done:Done){
        try {
            const userDB=await this.userService.findUser(user.DiscordID);
            return userDB ? done(null, userDB) : done(null,null);
        } catch (error) {
            done(error,null);
        }
        
       
    }
}