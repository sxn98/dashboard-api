import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Profile, Strategy} from 'passport-discord';
import { IAuthService } from "../interfaces/auth";

// cand userul cand se va loga, va invoca aceasta clasa, si va fi trimis pe site-ul Discord

@Injectable() //o putem injecta in orice modul sau clasa
export class DiscordStrategy extends PassportStrategy(Strategy){ // acest discord strategy trb sa cheme AuthService si sa cheme metodele
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService:IAuthService
    ){
        super({
            clientID:process.env.APP_ID,
            clientSecret:process.env.SECRET_ID,
            callbackURL:process.env.DIS_REDIRECT_URL,
            scope:['identify','email','guilds'],
        });
    }

    async validate(accesToken: string, refreshToken:string, profile:Profile){ // cand userul apasa pe "authorize" din platforma Discord se va invoca aceasta metoda si va returna token-urile si profilul
        console.log('DiscordStrategy Validate Method');
        console.log(profile.username);
        console.log(profile.guilds[profile.guilds.findIndex((server)=> server.name=="NextGen™ - Official Page")])

        return this.authService.validateUser({DiscordID:profile.id});  // validam userul
    }
}