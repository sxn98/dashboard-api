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

export type PartialGuild={ // punem datele provenite intr-o ordine
    id:string;
    name: string;
    icon:string;
    owner:boolean;
    permissions:string;
    features: string[];

};



export type Done=(err:Error, user:UserConfig)=>void //va returna void