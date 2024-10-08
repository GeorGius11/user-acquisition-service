import { Controller, Post, Body } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async createPurchase(@Body() createPurchaseDto: CreatePurchaseDto) {
    return await this.purchaseService.createPurchase(createPurchaseDto);
  }
}
