import { Module } from '@nestjs/common';
import { TmsRestaurantResultBusinessAndProfitService } from './tms-restaurant-result-business-and-profit.service';
import { TmsRestaurantResultBusinessAndProfitController } from './tms-restaurant-result-business-and-profit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TmsRestaurantResultBusinessAndProfitReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit.entity';
import { TmsRestaurantResultBusinessAndProfitAdjacentReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-adjacent.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TmsRestaurantResultBusinessAndProfitReportEntity, TmsRestaurantResultBusinessAndProfitAdjacentReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantResultBusinessAndProfitModule,
  ],
  providers: [TmsRestaurantResultBusinessAndProfitService],
  controllers: [TmsRestaurantResultBusinessAndProfitController]
})
export class TmsRestaurantResultBusinessAndProfitModule {}
