/* eslint-disable prettier/prettier */
import { IsInt, IsString } from "class-validator";

export class CustomerDto{
    @IsString()
    name:string;

    @IsInt()
    age:number;

    @IsString()
    gender:string;
}