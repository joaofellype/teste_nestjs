import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException,HttpStatus, UseGuards,Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { LoginClientDto } from './dto/login-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { JwtAuthGuards } from '../auth/jwt-auth.guards';
import { LocalAuthGuard } from '../auth/local-auth.guards';
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService,private authService: AuthService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }
  @UseGuards(JwtAuthGuards)
  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
  //@UseGuards(LocalAuthGuard)
  @Post("/login")
 async login(@Body() loginClientDto: LoginClientDto) {
    
 return await  this.clientService.login(loginClientDto).then((res) => {
    console.log(res)
       return this.authService.login(res.message).then((resul) => {
          return resul;
        })
     }).catch(err=>{
      throw  new HttpException({
         status: HttpStatus.BAD_REQUEST,
         error:err
       },HttpStatus.BAD_REQUEST);
     })
  }
}
