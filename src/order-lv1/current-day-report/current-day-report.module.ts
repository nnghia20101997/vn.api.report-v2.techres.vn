import { Module } from '@nestjs/common';
import { CurrentDayReportService } from './current-day-report.service';
import { CurrentDayReportController } from './current-day-report.controller';
import { RestaurantRevenueByBranchReportEntity } from './current-day-report.entity/restaurant-revenue-by-branch-report.entity';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity';
import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([
    RestaurantRevenueByBranchReportEntity,
    RestaurantRevenueCostCustomerByRestaurantBrandReportEntity,
    RestaurantRevenueDetailByRestaurantBrandReportEntity]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  CurrentDayReportModule
],
  providers: [CurrentDayReportService],
  controllers: [CurrentDayReportController]
})
export class CurrentDayReportModule {}
