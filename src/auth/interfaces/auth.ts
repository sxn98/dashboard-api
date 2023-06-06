import { UserConfig } from "src/typeorm/entities/UserConfig";
import { UserDetails } from "src/types/types";

export interface IAuthService{
    validateUser(details: UserDetails): Promise<UserConfig>; //va returna un user

    // intotdeauna va returna un user decat daca Discord e offline sau e configurat incorect, ceea ce ma indoiesc
}