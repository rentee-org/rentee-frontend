import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2, 100)
  firstname: string;

  @IsNotEmpty()
  @Length(2, 100)
  lastname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
