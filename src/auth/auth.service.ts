import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from 'src/client/client.service';
import { LoginClientDto } from 'src/client/dto/login-client.dto';
@Injectable()
export class AuthService {

    constructor( @Inject( forwardRef(() =>ClientService )) private readonly clientService: ClientService,private jwtService: JwtService){}

    async validate(loginClientDto: LoginClientDto): Promise<any> {
      const user = await this.clientService.login(loginClientDto).catch(err=>{
        return null
      });
      return user;
    }
  
    async login(user: any) {
        console.log("user",user)
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
