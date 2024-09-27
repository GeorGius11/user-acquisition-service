import { Body, Controller, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post()
  async createOffer(@Body() createOfferDto: CreateOfferDto) {
    return await this.offerService.createOffer(createOfferDto);
  }
}
