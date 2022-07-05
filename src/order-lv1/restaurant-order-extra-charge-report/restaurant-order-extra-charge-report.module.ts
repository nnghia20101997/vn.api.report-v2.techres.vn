import { Module } from '@nestjs/common';
import { RestaurantOrderExtraChargeReportService } from './restaurant-order-extra-charge-report.service';
import { RestaurantOrderExtraChargeReportController } from './restaurant-order-extra-charge-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantOrderExtraChargeReportEntity } from './restaurant-order-extra-charge-report.entity/restaurant-order-extra-charge-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantOrderExtraChargeReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
RestaurantOrderExtraChargeReportModule
],
  providers: [RestaurantOrderExtraChargeReportService],
  controllers: [RestaurantOrderExtraChargeReportController]
})
export class RestaurantOrderExtraChargeReportModule {}
