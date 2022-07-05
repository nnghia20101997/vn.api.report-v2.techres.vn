import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';import { BusinessResultReportService } from './business-result-report.service';
import { BusinessResultReportController } from './business-result-report.controller';
import { RestaurantResultBusinessAndProfitReportEntity } from './business-result-report.entity/restaurant-result-business-and-profit-report.entity';
import { RestaurantRevenueCostSummaryReportEntity } from './business-result-report.entity/restaurant-revenue-cost-summary-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    RestaurantResultBusinessAndProfitReportEntity,
    RestaurantRevenueCostSummaryReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
  BusinessResultReportModule
],
  providers: [BusinessResultReportService],
  controllers: [BusinessResultReportController]
})
export class BusinessResultReportModule {}
