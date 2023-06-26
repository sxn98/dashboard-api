import { GuildConfig } from "src/typeorm/entities/GuildConfig";
import { IGuildsService } from "../interfaces/guilds";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class GuildsService implements IGuildsService{
    constructor(@InjectRepository(GuildConfig) private readonly guildConfigRepository: Repository<GuildConfig>){}

    getGuildConfig(GuildID:string) {
        return this.guildConfigRepository.findOneBy({GuildID})
        
    }
    async updateGuildPrefix(GuildID: string, prefix: string){
        const guildConfiguration=await this.getGuildConfig(GuildID);
        if(!guildConfiguration) throw new HttpException('Configuratia nu a fost gasita', HttpStatus.BAD_REQUEST);
        
        return this.guildConfigRepository.save({
            ...guildConfiguration, // destructuram valorile originale, asta ajuta sa nu cream duplicate
            prefix, // din cauza ca am destructurat, valoarea originala va fi rescrisa de catre prefixul nostru nou
        })
    }
    async updateWelcomeChannel(GuildID: string, WelcomeChannelID: string) {
        const guildConfiguration=await this.getGuildConfig(GuildID);
        if(!guildConfiguration) throw new HttpException('Configuratia nu a fost gasita', HttpStatus.BAD_REQUEST);

        return this.guildConfigRepository.save({
            ...guildConfiguration, 
            WelcomeChannelID, 
        })
    }
}