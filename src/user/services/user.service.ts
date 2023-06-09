import { Injectable } from "@nestjs/common";
import { IUserService } from "../interfaces/user";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserConfig } from "src/typeorm/entities/UserConfig";
import { UpdateUserDetails, UserDetails } from "src/types/types";


@Injectable()
export class UserService implements IUserService{ // responsabil pentru a crea useri, gasi useri etc din User Domain

    constructor(
        @InjectRepository(UserConfig) private readonly userRepository: Repository<UserConfig>,
    ){ }
    createUser(details:UserDetails){
        console.log('Creeaza User');
        const newUser=this.userRepository.create(details);
        return this.userRepository.save(newUser);
    }
    findUser(DiscordID:string){
        console.log('Gaseste User')
       
        return this.userRepository.findOneBy({DiscordID}); // note: FindOne nu mai merge in versiunea asta, daca da eroare sa se incerce FindOneBy
    }
    updateUser(user:UserConfig, details:UpdateUserDetails) {
        console.log('Update User');
        return this.userRepository.save({
            ...user,  // destructuram userul
            ...details,
        }); // va returna userul
    }
}
