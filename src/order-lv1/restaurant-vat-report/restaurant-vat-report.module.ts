import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantVatReportEntity } from './restaurant-vat-report.entity/restaurant-vat-report.entity';
import { RestaurantVatReportService } from './restaurant-vat-report.service';
import { RestaurantVatReportController } from './restaurant-vat-report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantVatReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
  RestaurantVatReportModule
],
  providers: [RestaurantVatReportService],
  controllers: [RestaurantVatReportController]
})
export class RestaurantVatReportModule {}
