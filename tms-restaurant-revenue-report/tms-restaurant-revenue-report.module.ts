import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantRevenueReportController } from './tms-restaurant-revenue-report.controller';
import { TmsRestaurantRevenueAdjacentReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-adjacent-report.entity';
import { TmsRestaurantRevenueReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-report.entity';
import { TmsRestaurantRevenueSamePeriodReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-same-period.entity';
import { TmsRestaurantRevenueReportService } from './tms-restaurant-revenue-report.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TmsRestaurantRevenueReportEntity, TmsRestaurantRevenueAdjacentReportEntity, TmsRestaurantRevenueSamePeriodReportEntity]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        TmsRestaurantRevenueReportModule,
    ],
    
    providers: [TmsRestaurantRevenueReportService],
    controllers: [TmsRestaurantRevenueReportController]

})
export class TmsRestaurantRevenueReportModule {}
