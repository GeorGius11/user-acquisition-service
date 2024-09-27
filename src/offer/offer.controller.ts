import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { OfferService } from './offer.service';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Get()
  getAllOffers() {
    return this.offerService.getAllOffers();
  }

  @Post()
  createOffer(
    @Body('name') name: string,
    @Body('price', ParseIntPipe) price: number,
  ) {
    console.log(name);
    console.log(price);
    return this.offerService.createOffer(name, price);
  }
}
