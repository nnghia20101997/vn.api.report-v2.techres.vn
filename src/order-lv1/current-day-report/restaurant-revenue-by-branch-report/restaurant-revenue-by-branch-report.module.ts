import { Module } from '@nestjs/common';
import { RestaurantRevenueByBranchReportService } from './restaurant-revenue-by-branch-report.service';
import { RestaurantRevenueByBranchReportController } from './restaurant-revenue-by-branch-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantRevenueByBranchReportEntity } from './restaurant-revenue-by-branch-report.entity/restaurant-revenue-by-branch-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantRevenueByBranchReportEntity]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantRevenueByBranchReportModule
],
  providers: [RestaurantRevenueByBranchReportService],
  controllers: [RestaurantRevenueByBranchReportController]
})
export class RestaurantRevenueByBranchReportModule {}
