import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueByAreaReportService } from './tms-restaurant-revenue-by-area-report.service';
import { TmsRestaurantRevenueByAreaReportController } from './tms-restaurant-revenue-by-area-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantRevenueByAreaReportEntity } from './tms-restaurant-revenue-by-area-report.entity/tms-restaurant-revenue-by-area-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueByAreaReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueByAreaReportModule,
],

  providers: [TmsRestaurantRevenueByAreaReportService],
  controllers: [TmsRestaurantRevenueByAreaReportController]
})
export class TmsRestaurantRevenueByAreaReportModule {}
