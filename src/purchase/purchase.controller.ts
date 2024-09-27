import { Controller, Post, Body } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  createPurchase(
    @Body('userId') userId: number,
    @Body('offerId') offerId: number,
  ) {
    return this.purchaseService.createPurchase(userId, offerId);
  }
}
