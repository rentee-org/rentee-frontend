import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
