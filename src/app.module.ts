import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { OfferModule } from './offer/offer.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Se0db3f5092',
      database: 'user_acquisition_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    OfferModule,
    PurchaseModule,
  ],
})
export class AppModule {}
