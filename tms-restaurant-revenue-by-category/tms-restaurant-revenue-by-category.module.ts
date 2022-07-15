import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueByCategoryService } from './tms-restaurant-revenue-by-category.service';
import { TmsRestaurantRevenueByCategoryController } from './tms-restaurant-revenue-by-category.controller';
import { TmsRestaurantRevenueByCategoryReportEntity } from './tms-restaurant-revenue-by-category.entity/tms-restaurant-revenue-by-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueByCategoryReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueByCategoryModule,
],

  providers: [TmsRestaurantRevenueByCategoryService],
  controllers: [TmsRestaurantRevenueByCategoryController]
})
export class TmsRestaurantRevenueByCategoryModule {}
