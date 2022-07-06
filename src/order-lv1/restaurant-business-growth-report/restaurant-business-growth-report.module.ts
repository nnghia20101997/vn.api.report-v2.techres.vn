import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RestaurantBusinessGrowthReportService } from './restaurant-business-growth-report.service';
import { RestaurantBusinessGrowthReportController } from './restaurant-business-growth-report.controller';
import { RestaurantBusinessGrowthReportEntity } from './restaurant-business-growth-report.entity/restaurant-business-growth-report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantBusinessGrowthReportEntity
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    RestaurantBusinessGrowthReportModule,
  ],
  providers: [RestaurantBusinessGrowthReportService],
  controllers: [RestaurantBusinessGrowthReportController]
})
export class RestaurantBusinessGrowthReportModule {}
