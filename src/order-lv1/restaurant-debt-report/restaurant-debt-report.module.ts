import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantDebtReportService } from './restaurant-debt-report.service';
import { RestaurantDebtReportController } from './restaurant-debt-report.controller';
import { RestaurantDebtReportEntity } from './restaurant-debt-report.entity/restaurant-debt-report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantDebtReportEntity
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    RestaurantDebtReportModule,
  ],
  providers: [RestaurantDebtReportService],
  controllers: [RestaurantDebtReportController]
})
export class RestaurantDebtReportModule {}
