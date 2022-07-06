import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantRevenueSummaryReportService } from './restaurant-revenue-summary-report.service';
import { RestaurantRevenueSummaryReportController } from './restaurant-revenue-summary-report.controller';
import { RestaurantRevenueSummaryReportEntity } from './restaurant-revenue-summary-report.entity/restaurant-revenue-summary-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantRevenueSummaryReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
  RestaurantRevenueSummaryReportModule
],
  providers: [RestaurantRevenueSummaryReportService],
  controllers: [RestaurantRevenueSummaryReportController]
})
export class RestaurantRevenueSummaryReportModule {}
