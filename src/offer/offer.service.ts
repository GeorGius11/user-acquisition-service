import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer) private offerRepository: Repository<Offer>,
  ) {}

  getAllOffers(): Promise<Offer[]> {
    return this.offerRepository.find();
  }

  createOffer(name: string, price: number): Promise<Offer> {
    const offer = this.offerRepository.create({ name, price });
    return this.offerRepository.save(offer);
  }
}
