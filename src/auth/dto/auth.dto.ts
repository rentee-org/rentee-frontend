import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, MinLength } from 'class-validator';

export class RegisterDto {
    @IsNotEmpty()
    @MinLength(3)
    firstName: string;

    @IsNotEmpty()
    @MinLength(3)
    lastName: string;

    @IsOptional()
    @IsPhoneNumber('NG') // or general format
    phone?: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsOptional()
    role: string | undefined;

    @IsOptional()
  avatarUrl?: string;
}

export class LoginDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
