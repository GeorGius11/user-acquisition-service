import { IsNumber, IsString } from "class-validator";

export class CreateOfferDto {
  @IsString()
  name: string;

  @IsNumber({}, { message: "Price must be a valid number." })
  price: number;
}
