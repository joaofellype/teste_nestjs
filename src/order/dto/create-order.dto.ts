import { CreateClientDto } from "src/client/dto/create-client.dto";
import { CreateProductDto } from "src/products/dto/create-product.dto";

export class CreateOrderDto {

    description:string;
    price:number;
    products:Array<CreateProductDto>
    client: CreateClientDto;
    data_order: Date;
}
