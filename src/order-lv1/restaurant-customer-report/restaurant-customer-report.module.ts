import { Module } from '@nestjs/common';
import { RestaurantCustomerReportService } from './restaurant-customer-report.service';
import { RestaurantCustomerReportController } from './restaurant-customer-report.controller';
import { RestaurantCustomerReportEntity } from './restaurant-customer-report.entity/restaurant-customer-report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantCustomerReportEntity
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    RestaurantCustomerReportModule,
  ],
  providers: [RestaurantCustomerReportService],
  controllers: [RestaurantCustomerReportController]
})
export class RestaurantCustomerReportModule {}
