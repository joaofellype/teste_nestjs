import { forwardRef, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client, ClientSchema } from './entities/client.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{name:Client.name,schema:ClientSchema}]),forwardRef(() => AuthModule) ] ,
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
 