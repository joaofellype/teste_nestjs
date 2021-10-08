import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateClientDto {
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    password_reset: boolean;
    cpf:string;
    number:string;

}
