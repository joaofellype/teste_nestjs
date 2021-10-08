import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderDocument: Model<OrderDocument>) { }

  create(createOrderDto: CreateOrderDto) {
    return this.orderDocument.create(createOrderDto);
  }

  findAll() {
    return this.orderDocument.find();
  }

  findOne(id: string) {
    return this.orderDocument.findById(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderDocument.findByIdAndUpdate({
      _id: id
    },
      updateOrderDto,
      {
        new: true
      }

    )
  }

  remove(id: string) {
    return this.orderDocument.deleteOne({
      _id:id
    }).exec();
  }
}
