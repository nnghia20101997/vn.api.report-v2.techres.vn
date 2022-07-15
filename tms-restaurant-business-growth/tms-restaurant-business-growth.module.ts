import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantBusinessGrowthController } from './tms-restaurant-business-growth.controller';
import { TmsRestaurantBusinessGrowthReportEntity } from './tms-restaurant-business-growth.entity/tms-restaurant-business-growth.entity';
import { TmsRestaurantBusinessGrowthService } from './tms-restaurant-business-growth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TmsRestaurantBusinessGrowthReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantBusinessGrowthModule,
  ],
  providers: [TmsRestaurantBusinessGrowthService],
  controllers: [TmsRestaurantBusinessGrowthController]
})
export class TmsRestaurantBusinessGrowthModule {}
