import { IsDecimal, IsInt, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  name: string;

  @IsDecimal()
  price: number;
}
