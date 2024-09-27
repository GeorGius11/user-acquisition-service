import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Get()
  getAllOffers() {
    return this.offerService.getAllOffers();
  }

  @Post()
  createOffer(@Body() createOfferDto: CreateOfferDto) {
    return this.offerService.createOffer(createOfferDto);
  }
}
