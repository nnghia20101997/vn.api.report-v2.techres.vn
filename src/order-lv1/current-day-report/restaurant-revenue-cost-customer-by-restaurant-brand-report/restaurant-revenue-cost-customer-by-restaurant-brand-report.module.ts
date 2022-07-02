import { Module } from '@nestjs/common';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportService } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.service';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportController } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantRevenueCostCustomerByRestaurantBrandReportEntity]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantRevenueCostCustomerByRestaurantBrandReportModule
],
  providers: [RestaurantRevenueCostCustomerByRestaurantBrandReportService],
  controllers: [RestaurantRevenueCostCustomerByRestaurantBrandReportController]
})
export class RestaurantRevenueCostCustomerByRestaurantBrandReportModule {}
