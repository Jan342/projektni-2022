import {IsEmail, MinLength } from "class-validator";

export class UserUpdateDto{
    first_name?: string;
    last_name?: string;
    @IsEmail()
    email?: string;
    @MinLength(4)
    password?: string;

}