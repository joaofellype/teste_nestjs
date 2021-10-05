
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  password_reset: boolean;

  @Prop()
  cpf: string;

  @Prop()
  number:string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);