import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< Tan_V2
import { RestaurantCashDetailReportEntity } from './restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity';
=======
>>>>>>> local
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantCashDetailReportEntity } from './restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity';
import { RestaurantCashDetailReportService } from './restaurant-cash-detail-report.service';
import { RestaurantCashDetailReportController } from './restaurant-cash-detail-report.controller';
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
