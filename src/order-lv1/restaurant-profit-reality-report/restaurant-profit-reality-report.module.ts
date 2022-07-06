import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantProfitRealityReportService } from './restaurant-profit-reality-report.service';
import { RestaurantProfitRealityReportController } from './restaurant-profit-reality-report.controller';
import { RestaurantProfitRealityReportEntity } from './restaurant-profit-reality-report.entity/restaurant-profit-reality-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantProfitRealityReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantProfitRealityReportModule
],
  providers: [RestaurantProfitRealityReportService],
  controllers: [RestaurantProfitRealityReportController]
})
export class RestaurantProfitRealityReportModule {}
