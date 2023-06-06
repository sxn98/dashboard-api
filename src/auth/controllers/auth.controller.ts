import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthenticateGuard, DiscordAuthGuard } from '../utils/Guard';
import { Response } from 'express';
import { AuthUser } from '../utils/Decorators';
import { UserConfig } from 'src/typeorm/entities/UserConfig';

@Controller('auth')
export class AuthController {
    @Get('login')
    @UseGuards(DiscordAuthGuard)   // un guard e folosit ca sa protejam rutele in nestjs
    login(){}

    @Get('redirect') //redirect catre aplicatia de frontend
    @UseGuards(DiscordAuthGuard)
    redirect(@Res() res:Response){ 
        res.redirect('http://localhost:3000/MyServer');
    }

    @Get('status')
    @UseGuards(AuthenticateGuard)
    status(@AuthUser() user:UserConfig){
         return user;
    }

    @Post('logout')
    logout(){}
}
