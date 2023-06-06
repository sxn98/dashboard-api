import { Inject, Injectable } from '@nestjs/common';

import { IUserService } from 'src/user/interfaces/user';
import { IAuthService } from '../interfaces/auth';
import { UserDetails } from 'src/types/types';


@Injectable()
export class AuthService implements IAuthService{// e responsabil de creat un user sau de gasit un user si sa il dea catre fisierul strategy
    constructor(
        @Inject('USER_SERVICE') private readonly userService: IUserService,
    ){}
        async validateUser(details:UserDetails) { //daca userul e gasit il returnam, daca userul nu este il cream
           const user= await this.userService.findUser(details.DiscordID)
           return user || this.userService.createUser(details); // returnam userul gasit sau cream noi unul
        }
} 