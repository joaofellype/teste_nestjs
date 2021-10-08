import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from 'src/client/client.service';
@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService){}

    async login(user: any) {
        console.log("user",user)
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
