import { Module } from '@nestjs/common';
import { TmsRestaurantTotalRevenueFoodByInventoryService } from './tms-restaurant-total-revenue-food-by-inventory.service';
import { TmsRestaurantTotalRevenueFoodByInventoryController } from './tms-restaurant-total-revenue-food-by-inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantTotalRevenueFoodByInventoryReportEntity } from './tms-restaurant-total-revenue-food-by-inventory.entity/tms-restaurant-total-revenue-food-by-inventory.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantTotalRevenueFoodByInventoryReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantTotalRevenueFoodByInventoryModule,
  ],

  providers: [TmsRestaurantTotalRevenueFoodByInventoryService],
  controllers: [TmsRestaurantTotalRevenueFoodByInventoryController]
})
export class TmsRestaurantTotalRevenueFoodByInventoryModule {}
