import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoRoleConfig } from 'src/typeorm/entities/AutoRoleConfig';
import { AutoRoleGuildsController } from './controllers/guildsautorole.controller';
import { GuildAutoRoleService } from './services/guildautorole.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([AutoRoleConfig]),
    ],
    
    controllers:[AutoRoleGuildsController],
    providers:[
        {
            provide:'GUILDAUTOROLE_SERVICE',
            useClass:GuildAutoRoleService,
        },
    ]
})
export class GuildsAutoRoleModule {}