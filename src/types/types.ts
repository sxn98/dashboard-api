import { UserConfig } from "src/typeorm/entities/UserConfig";

export type UserDetails={
    DiscordID:string;
    accessToken: string;
    refreshToken:string
    username:string;
    discriminator:string;
};
export type UpdateUserDetails={
    accessToken:string;
    refreshToken:string;
    username:string;
    discriminator:string;
}

export type Done=(err:Error, user:UserConfig)=>void //va returna void