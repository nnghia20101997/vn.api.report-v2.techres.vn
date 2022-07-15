import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueDetailByRestaurantBrandService } from './tms-restaurant-revenue-detail-by-restaurant-brand.service';
import { TmsRestaurantRevenueDetailByRestaurantBrandController } from './tms-restaurant-revenue-detail-by-restaurant-brand.controller';
import { TmsRestaurantRevenueDetailByRestaurantBrandReportEntity } from './tms-restaurant-revenue-detail-by-restaurant-brand.entity/tms-restaurant-revenue-detail-by-restaurant-brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueDetailByRestaurantBrandReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueDetailByRestaurantBrandModule,
],

  providers: [TmsRestaurantRevenueDetailByRestaurantBrandService],
  controllers: [TmsRestaurantRevenueDetailByRestaurantBrandController]
})
export class TmsRestaurantRevenueDetailByRestaurantBrandModule {}
