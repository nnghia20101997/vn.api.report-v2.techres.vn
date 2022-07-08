import { Module } from '@nestjs/common';
import { RestaurantDiscountFromOrderReportService } from './restaurant-discount-from-order-report.service';
import { RestaurantDiscountFromOrderReportController } from './restaurant-discount-from-order-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantDiscountFromOrderReportEntity } from './restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantDiscountFromOrderReportEntity
    ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantDiscountFromOrderReportModule
],
  providers: [RestaurantDiscountFromOrderReportService],
  controllers: [RestaurantDiscountFromOrderReportController]
})
export class RestaurantDiscountFromOrderReportModule {}
