import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OverviewBusinessGrowthReportService } from './overview-business-growth-report.service';
import { OverviewBusinessGrowthReportController } from './overview-business-growth-report.controller';
import { RestaurantBusinessGrowthReportEntity } from './overview-business-growth-report.entity/restaurant-business-growth-report.entity';
import { RestaurantBusinessGrowthSummaryReportEntity } from './overview-business-growth-report.entity/restaurant-business-growth-summary-report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantBusinessGrowthReportEntity , 
      RestaurantBusinessGrowthSummaryReportEntity
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    OverviewBusinessGrowthReportModule,
  ],
  providers: [OverviewBusinessGrowthReportService],
  controllers: [OverviewBusinessGrowthReportController]
})
export class OverviewBusinessGrowthReportModule {}
