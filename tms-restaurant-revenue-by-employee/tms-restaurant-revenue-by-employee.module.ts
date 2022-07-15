import { Module } from '@nestjs/common';
import { TmsRestaurantRevenueByEemployeeService } from './tms-restaurant-revenue-by-employee.service';
import { TmsRestaurantRevenueByEemployeeController } from './tms-restaurant-revenue-by-employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsRestaurantRevenueByEmployeeReportEntity } from './tms-restaurant-revenue-by-employee.entity/tms-restaurant-revenue-by-employee.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsRestaurantRevenueByEmployeeReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsRestaurantRevenueByEemployeeModule,
],

  providers: [TmsRestaurantRevenueByEemployeeService],
  controllers: [TmsRestaurantRevenueByEemployeeController]
})
export class TmsRestaurantRevenueByEemployeeModule {}
