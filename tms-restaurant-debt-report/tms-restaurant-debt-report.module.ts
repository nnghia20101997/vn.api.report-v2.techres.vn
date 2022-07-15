import { Module } from '@nestjs/common';
import { TmsRestaurantDebtReportService } from './tms-restaurant-debt-report.service';
import { TmsRestaurantDebtReportController } from './tms-restaurant-debt-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantDebtReportEntity } from './tms-restaurant-debt-report.entity/tms-restaurant-debt-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([TmsRestaurantDebtReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantDebtReportModule,
  ],
  providers: [TmsRestaurantDebtReportService],
  controllers: [TmsRestaurantDebtReportController]
})
export class TmsRestaurantDebtReportModule {}
