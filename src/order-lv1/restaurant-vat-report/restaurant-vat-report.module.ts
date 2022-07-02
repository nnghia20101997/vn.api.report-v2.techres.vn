import { Module } from '@nestjs/common';
import { RestaurantVatReportService } from './restaurant-vat-report.service';
import { RestaurantVatReportController } from './restaurant-vat-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantVatReportEntity } from './restaurant-vat-report.entity/restaurant-vat-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantVatReportEntity]),
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
