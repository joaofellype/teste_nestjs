import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://felypesa_12:fPsqY7LUxvP0rL4j@cluster0.22ojx.mongodb.net/test'),ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
