import { Module } from '@nestjs/common';
import { TmsRestaurantDiscountFromOrderService } from './tms-restaurant-discount-from-order.service';
import { TmsRestaurantDiscountFromOrderController } from './tms-restaurant-discount-from-order.controller';
import { TmsRestaurantDiscountFromOrderReportEntity } from './tms-restaurant-discount-from-order.entity/tms-restaurant-discount-from-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantDiscountFromOrderReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantDiscountFromOrderModule,
  ],

  providers: [TmsRestaurantDiscountFromOrderService],
  controllers: [TmsRestaurantDiscountFromOrderController]
})
export class TmsRestaurantDiscountFromOrderModule {}
