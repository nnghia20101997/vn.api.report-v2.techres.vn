import { Module } from '@nestjs/common';
import { TmsRestaurantDetailFoodService } from './tms-restaurant-detail-food.service';
import { TmsRestaurantDetailFoodController } from './tms-restaurant-detail-food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantDetailFoodReportEntity } from './tms-restaurant-detail-food.entity/tms-restaurant-detail-food.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantDetailFoodReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantDetailFoodModule,
  ],

  providers: [TmsRestaurantDetailFoodService],
  controllers: [TmsRestaurantDetailFoodController]
})
export class TmsRestaurantDetailFoodModule {}
