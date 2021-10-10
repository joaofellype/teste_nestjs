import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginClientDto } from 'src/client/dto/login-client.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(loginClientDto:LoginClientDto): Promise<any> {
    const user = await this.authService.validate(loginClientDto);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}