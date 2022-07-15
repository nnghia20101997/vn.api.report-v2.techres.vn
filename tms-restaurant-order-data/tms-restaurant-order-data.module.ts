import { Module } from '@nestjs/common';
import { TmsRestaurantOrderDataService } from './tms-restaurant-order-data.service';
import { TmsRestaurantOrderDataController } from './tms-restaurant-order-data.controller';

@Module({
  providers: [TmsRestaurantOrderDataService],
  controllers: [TmsRestaurantOrderDataController]
})
export class TmsRestaurantOrderDataModule {}
