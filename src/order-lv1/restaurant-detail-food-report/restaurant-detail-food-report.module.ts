import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantDetailFoodReportService } from './restaurant-detail-food-report.service';
import { RestaurantDetailFoodReportController } from './restaurant-detail-food-report.controller';
import { RestaurantDetailFoodReportEntity } from './restaurant-detail-food-report.entity/restaurant-detail-food-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantDetailFoodReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: process.env.SECRET_TOKEN,
  }),
  RestaurantDetailFoodReportModule
  ],
  providers: [RestaurantDetailFoodReportService],
  controllers: [RestaurantDetailFoodReportController]
})
export class RestaurantDetailFoodReportModule {}
