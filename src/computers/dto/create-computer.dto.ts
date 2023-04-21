import { IsString, IsNotEmpty, IsEmail } from "class-validator";


export class CreateComputersDto {
    @IsString()
    @IsNotEmpty()
    storeName: string;

    @IsString()
    @IsNotEmpty()
    direction: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    cel: number

    @IsString()
    @IsNotEmpty()
    brands: string

    @IsString()
    @IsNotEmpty()
    supplier: string

}