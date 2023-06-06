import { UserConfig } from "src/typeorm/entities/UserConfig";

export type UserDetails={
    DiscordID:string;
};

export type Done=(err:Error, user:UserConfig)=>void //va returna void