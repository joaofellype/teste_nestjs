import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports: [ 
   forwardRef(() => ClientModule), 
    JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' }
  })],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule { }
