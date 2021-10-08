import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashPassword } from 'src/encrypt/HashPassword';
import { CreateClientDto } from './dto/create-client.dto';
import { LoginClientDto } from './dto/login-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientDocument, Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  hashPassword = new HashPassword();
  constructor(@InjectModel(Client.name) private clientDocument: Model<ClientDocument>) {
  }

  async create(createClientDto: CreateClientDto) {
    createClientDto.password = await this.hashPassword.hashPassword(createClientDto.password);

    return this.clientDocument.create(createClientDto);
  }

  findAll() {
    return this.clientDocument.find();
  }

  findOne(id: string) {
    return this.clientDocument.findById(id);
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientDocument.findByIdAndUpdate({
      _id: id
    },
      updateClientDto,
      {
        new: true
      });
  }

  remove(id: string) {
    return this.clientDocument.deleteOne({
      _id: id
    }).exec();
  }
  async login(loginClientDto: LoginClientDto) {
    var client: CreateClientDto = new CreateClientDto();

    client = await this.clientDocument.findOne({ email: loginClientDto.email }).exec();
    if(!client){
      throw "Não existe client";
    }
    if(!await this.hashPassword.comparePassword(loginClientDto.password,client.password)){
        throw "Senha incorreta";
    }
    return { message:client};
  }
}
