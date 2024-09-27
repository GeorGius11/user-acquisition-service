import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { Purchase } from './purchase.entity';
import { User } from '../user/user.entity';
import { Offer } from '../offer/offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase, User, Offer]), HttpModule],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
