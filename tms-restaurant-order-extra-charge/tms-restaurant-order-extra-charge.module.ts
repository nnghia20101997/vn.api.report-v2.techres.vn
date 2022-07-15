import { Module } from '@nestjs/common';
import { TmsRestaurantOrderExtraChargeService } from './tms-restaurant-order-extra-charge.service';
import { TmsRestaurantOrderExtraChargeController } from './tms-restaurant-order-extra-charge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantOrderExtraChargeReportEntity } from './tms-restaurant-order-extra-charge.entity/tms-restaurant-order-extra-charge.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantOrderExtraChargeReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantOrderExtraChargeModule,
],

  providers: [TmsRestaurantOrderExtraChargeService],
  controllers: [TmsRestaurantOrderExtraChargeController]
})
export class TmsRestaurantOrderExtraChargeModule {}
