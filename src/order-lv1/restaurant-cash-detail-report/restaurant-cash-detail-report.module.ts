import { Module } from '@nestjs/common';
import { RestaurantCashDetailReportService } from './restaurant-cash-detail-report.service';
import { RestaurantCashDetailReportController } from './restaurant-cash-detail-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantCashDetailReportEntity } from './restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity';
import { RestaurantCashDetailReportOutputEntity } from './restaurant-cash-detail-report.entity/restaurant-cash-detail-report.output.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
        TypeOrmModule.forFeature([
          RestaurantCashDetailReportEntity
        ]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        RestaurantCashDetailReportModule,
      ],
  providers: [RestaurantCashDetailReportService],
  controllers: [RestaurantCashDetailReportController]
})
export class RestaurantCashDetailReportModule {}
