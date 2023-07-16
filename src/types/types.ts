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

export type PartialGuildChannel={
    id:string;
    type:number;
    last_message_id:string;
    flags:number;
    last_pin_timestamp:string;
    guild_id:string
    name:string;
    parent_id?:string;
    rate_limit_per_user:string;
    topic?:string;
    position:string;
    permission_overwrites:string[];
    nsfw:boolean;
    icon_emoji?:string;
    theme_color?:string;
}

export type GuildRoles={
    id:string
    name:string;
    color: number;
    hoist: boolean;
    icon?: string;
    unicode_emoji?: string;
    position:number;
    permissions:string;
    managed:boolean;
    mentionable: boolean
    tags?:string[]
}



export type Done=(err:Error, user:UserConfig)=>void //va returna void