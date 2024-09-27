import { IsInt, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  name: string;

  @IsInt()
  price: number;
}
