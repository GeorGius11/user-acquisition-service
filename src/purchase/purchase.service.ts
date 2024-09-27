import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';
import { User } from '../user/user.entity';
import { Offer } from '../offer/offer.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Offer) private offerRepository: Repository<Offer>,
    private httpService: HttpService,
  ) {}

  async createPurchase(
    createPurchaseDto: CreatePurchaseDto,
  ): Promise<Purchase> {
    const { userId, offerId } = createPurchaseDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    const offer = await this.offerRepository.findOne({
      where: { id: offerId },
    });
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${offerId} not found.`);
    }

    const purchase = this.purchaseRepository.create({ user, offer });
    await this.purchaseRepository.save(purchase);

    // // Send event to analytics service
    // await firstValueFrom(
    //   this.httpService.post('http://analytics.service/purchase', {
    //     userId,
    //     offerId,
    //   }),
    // );

    // // Schedule astrological report
    // setTimeout(
    //   () => {
    //     this.httpService
    //       .post('http://astrology.service/report', { userId })
    //       .subscribe();
    //   },
    //   24 * 60 * 60 * 1000,
    // ); // 24 hours in milliseconds

    return purchase;
  }
}
