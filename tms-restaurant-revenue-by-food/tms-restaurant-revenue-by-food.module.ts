import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueByFoodService } from './tms-restaurant-revenue-by-food.service';
import { TmsRestaurantRevenueByFoodController } from './tms-restaurant-revenue-by-food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantRevenueByFoodReportEntity } from './tms-restaurant-revenue-by-food.entity/tms-restaurant-revenue-by-food.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueByFoodReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueByFoodModule,
  ],

  providers: [TmsRestaurantRevenueByFoodService],
  controllers: [TmsRestaurantRevenueByFoodController]
})
export class TmsRestaurantRevenueByFoodModule {}
