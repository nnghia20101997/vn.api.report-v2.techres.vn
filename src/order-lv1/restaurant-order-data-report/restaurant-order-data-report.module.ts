import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantOrderDataReportService } from './restaurant-order-data-report.service';
import { RestaurantOrderDataReportController } from './restaurant-order-data-report.controller';
import { RestaurantOrderDataReportEntity } from './restaurant-order-data-report.entity/restaurant-order-data-report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantOrderDataReportEntity
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    RestaurantOrderDataReportModule,
  ],
  providers: [RestaurantOrderDataReportService],
  controllers: [RestaurantOrderDataReportController]
})
export class RestaurantOrderDataReportModule {}
