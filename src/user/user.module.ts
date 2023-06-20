import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConfig } from 'src/typeorm/entities/UserConfig';
import { ThrottlerModule, ThrottlerGuard} from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports:[
        TypeOrmModule.forFeature([UserConfig]),
        ThrottlerModule.forRoot({
            ttl:1,   //time to live, cand va expira rate limit-ul
            limit:100   // cate request-uri are voie userul sa faca in timpul exprimat in TTL
        // userul are voie la 100 de mesaje odata la 1 secunde
        }),
    ],
    providers:[
        {
            provide:'USER_SERVICE',
            useClass:UserService,
        },
        {
            provide: APP_GUARD,
            useClass:ThrottlerGuard,
        }
    ],
    exports:[
        {
            provide:'USER_SERVICE',
            useClass:UserService,
        },
    ],
})
export class UserModule {}
