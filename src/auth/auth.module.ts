import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { ClientModule } from 'src/client/client.module';
import { PassportModule } from '@nestjs/passport';
import {ClientService } from '../client/client.service'
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    forwardRef(() => ClientModule),
     PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' }
    })],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule { }
