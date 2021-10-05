import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  products: Array<CreateProductDto>;

  @Prop()
   client: CreateClientDto;

  @Prop()
  data_order: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);