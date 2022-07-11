import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantRevenueByFoodReportService } from './restaurant-revenue-by-food-report.service';
import { RestaurantRevenueByFoodReportController } from './restaurant-revenue-by-food-report.controller';
import { RestaurantRevenueByFoodReportEntity } from './restaurant-revenue-by-food-report.entity/restaurant-revenue-by-food-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantRevenueByFoodReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: process.env.SECRET_TOKEN,
  }),
  RestaurantRevenueByFoodReportModule
  ],
  providers: [RestaurantRevenueByFoodReportService],
  controllers: [RestaurantRevenueByFoodReportController]
})
export class RestaurantRevenueByFoodReportModule {}
