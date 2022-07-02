import { Module } from '@nestjs/common';
import { RestaurantRevenueDetailByRestaurantBrandReportService } from './restaurant-revenue-detail-by-restaurant-brand-report.service';
import { RestaurantRevenueDetailByRestaurantBrandReportController } from './restaurant-revenue-detail-by-restaurant-brand-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from './restaurant-revenue-detail-by-restaurant-brand-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantRevenueDetailByRestaurantBrandReportEntity]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantRevenueDetailByRestaurantBrandReportModule
],
  providers: [RestaurantRevenueDetailByRestaurantBrandReportService],
  controllers: [RestaurantRevenueDetailByRestaurantBrandReportController]
})
export class RestaurantRevenueDetailByRestaurantBrandReportModule {}
