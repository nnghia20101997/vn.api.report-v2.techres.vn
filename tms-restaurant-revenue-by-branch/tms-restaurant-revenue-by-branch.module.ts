import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueByBranchService } from './tms-restaurant-revenue-by-branch.service';
import { TmsRestaurantRevenueByBranchController } from './tms-restaurant-revenue-by-branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantRevenueByBrandReportEntity } from './tms-restaurant-revenue-by-branch.entity/tms-restaurant-revenue-by-branch.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueByBrandReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueByBranchModule,
  ],

  providers: [TmsRestaurantRevenueByBranchService],
  controllers: [TmsRestaurantRevenueByBranchController]
})
export class TmsRestaurantRevenueByBranchModule {}
