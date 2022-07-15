import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandService } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.service';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandController } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity/tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueCostCustomerByRestaurantBrandModule,
  ],

  providers: [TmsRestaurantRevenueCostCustomerByRestaurantBrandService],
  controllers: [TmsRestaurantRevenueCostCustomerByRestaurantBrandController]
})
export class TmsRestaurantRevenueCostCustomerByRestaurantBrandModule {}
