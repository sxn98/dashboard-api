import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConfig } from 'src/typeorm/entities/UserConfig';

@Module({
    imports:[TypeOrmModule.forFeature([UserConfig])],
    providers:[
        {
            provide:'USER_SERVICE',
            useClass:UserService,
        },
    ],
    exports:[
        {
            provide:'USER_SERVICE',
            useClass:UserService,
        },
    ],
})
export class UserModule {}
