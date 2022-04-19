import {IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto{
    @IsNotEmpty()
    first_name: string;
    @IsNotEmpty()
    last_name: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @IsNotEmpty()
    @MinLength(4)
    password_confirm: string;

}