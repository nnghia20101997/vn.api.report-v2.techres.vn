import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantProfitDebtAmountSummaryReportService } from './restaurant-profit-debt-amount-summary-report.service';
import { RestaurantProfitDebtAmountSummaryReportController } from './restaurant-profit-debt-amount-summary-report.controller';
import { RestaurantProfitDebtAmountSummaryReportEntity } from './restaurant-profit-debt-amount-summary-report.entity/restaurant-profit-debt-amount-summary-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantProfitDebtAmountSummaryReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantProfitDebtAmountSummaryReportModule
],
  providers: [RestaurantProfitDebtAmountSummaryReportService],
  controllers: [RestaurantProfitDebtAmountSummaryReportController]
})
export class RestaurantProfitDebtAmountSummaryReportModule {}
