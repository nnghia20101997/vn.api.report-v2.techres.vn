import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantRevenueByCategoryReportService } from './restaurant-revenue-by-category-report.service';
import { RestaurantRevenueByCategoryReportController } from './restaurant-revenue-by-category-report.controller';
import { RestaurantRevenueByCategoryReportEntity } from './restaurant-revenue-by-category-report.entity/restaurant-revenue-by-category-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantRevenueByCategoryReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: process.env.SECRET_TOKEN,
  }),
    RestaurantRevenueByCategoryReportModule
  ],
  providers: [RestaurantRevenueByCategoryReportService],
  controllers: [RestaurantRevenueByCategoryReportController]
})
export class RestaurantRevenueByCategoryReportModule { }
