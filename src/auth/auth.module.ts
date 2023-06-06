import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserModule } from 'src/user/user.module';
import { DiscordStrategy } from './utils/DiscordStrategy';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
    imports:[UserModule],
    controllers: [AuthController],
    providers: [
        DiscordStrategy,
        SessionSerializer,
        {
            provide:'AUTH_SERVICE',
            useClass:AuthService,
        },
    ],
})
export class AuthModule {}
