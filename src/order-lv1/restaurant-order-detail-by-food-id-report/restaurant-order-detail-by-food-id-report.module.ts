import { Module } from '@nestjs/common';
import { RestaurantOrderDetailByFoodIdReportService } from './restaurant-order-detail-by-food-id-report.service';
import { RestaurantOrderDetailByFoodIdReportController } from './restaurant-order-detail-by-food-id-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantOrderDetailByFoodIdReportEntity } from './restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantOrderDetailByFoodIdReportEntity
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    RestaurantOrderDetailByFoodIdReportModule,
  ],
  providers: [RestaurantOrderDetailByFoodIdReportService],
  controllers: [RestaurantOrderDetailByFoodIdReportController]
})
export class RestaurantOrderDetailByFoodIdReportModule {}
