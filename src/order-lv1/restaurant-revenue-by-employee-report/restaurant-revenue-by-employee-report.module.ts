import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RestaurantRevenueByEmployeeReportService } from './restaurant-revenue-by-employee-report.service';
import { RestaurantRevenueByEmployeeReportController } from './restaurant-revenue-by-employee-report.controller';
import { RestaurantRevenueByEmployeeReportEntity } from "./restaurant-revenue-by-employee-report.entity/restaurant-revenue-by-employee-report.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantRevenueByEmployeeReportEntity
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    RestaurantRevenueByEmployeeReportModule,
  ],
  providers: [RestaurantRevenueByEmployeeReportService],
  controllers: [RestaurantRevenueByEmployeeReportController]
})
export class RestaurantRevenueByEmployeeReportModule {}
