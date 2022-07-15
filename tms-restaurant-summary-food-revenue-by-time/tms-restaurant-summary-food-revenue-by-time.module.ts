import { Module } from '@nestjs/common';
import { TmsRestaurantSummaryFoodRevenueByTimeService } from './tms-restaurant-summary-food-revenue-by-time.service';
import { TmsRestaurantSummaryFoodRevenueByTimeController } from './tms-restaurant-summary-food-revenue-by-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantSummaryFoodRevenueByTimeReportEntity } from './tms-restaurant-summary-food-revenue-by-time.entity/tms-restaurant-summary-food-revenue-by-time.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantSummaryFoodRevenueByTimeReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantSummaryFoodRevenueByTimeModule,
  ],

  providers: [TmsRestaurantSummaryFoodRevenueByTimeService],
  controllers: [TmsRestaurantSummaryFoodRevenueByTimeController]
})
export class TmsRestaurantSummaryFoodRevenueByTimeModule {}
