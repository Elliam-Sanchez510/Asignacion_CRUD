import { IsString, IsNotEmpty, IsEmail, IsNumber, MinLength } from "class-validator";

export class CreateComputersDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(25)
    storeName: string;

    @IsString()
    @IsNotEmpty()
    direction: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNumber()
    @IsNotEmpty()
    cel: number

    @IsString()
    @IsNotEmpty()
    brands: string

    @IsString()
    @IsNotEmpty()
    supplier: string

    @IsString()
    @IsNotEmpty()
    categories: string

}