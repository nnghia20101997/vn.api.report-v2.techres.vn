import { Module } from '@nestjs/common';
import { TmsRestaurantCostReportService } from './tms-restaurant-cost-report.service';
import { TmsRestaurantCostReportController } from './tms-restaurant-cost-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TmsRestaurantCostReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-report.entity';
import { TmsRestaurantCostAdjacentReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-adjacent-report.entity';
import { TmsRestaurantCostSamePeriodReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-same-period-report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TmsRestaurantCostReportEntity,TmsRestaurantCostAdjacentReportEntity,TmsRestaurantCostSamePeriodReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantCostReportModule,
  ],
  providers: [TmsRestaurantCostReportService],
  controllers: [TmsRestaurantCostReportController]
})
export class TmsRestaurantCostReportModule {}
