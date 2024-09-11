import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator"


export class createUserDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsInt()
    age:30;

    @IsEnum(['admin','user'],{
        message:'valide role must be either admin or user'
    })
    role:'admin'|'user'
}

