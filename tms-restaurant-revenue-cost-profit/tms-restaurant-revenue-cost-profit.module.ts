import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueCostProfitService } from './tms-restaurant-revenue-cost-profit.service';
import { TmsRestaurantRevenueCostProfitController } from './tms-restaurant-revenue-cost-profit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TmsRestaurantRevenueCostProfitRealityEntity } from './tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-reality.entity';
import { TmsRestaurantRevenueCostProfitEstimateEntity } from './tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-estimate.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueCostProfitRealityEntity, TmsRestaurantRevenueCostProfitEstimateEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueCostProfitModule,
  ],

  providers: [TmsRestaurantRevenueCostProfitService],
  controllers: [TmsRestaurantRevenueCostProfitController]
})
export class TmsRestaurantRevenueCostProfitModule {}
