import { IsEmail, IsObject } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsObject()
  marketingData: Record<string, any>;
}
