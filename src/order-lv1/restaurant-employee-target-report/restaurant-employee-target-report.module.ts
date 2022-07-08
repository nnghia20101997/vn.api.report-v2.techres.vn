import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantEmployeeTargetReportService } from './restaurant-employee-target-report.service';
import { RestaurantEmployeeTargetReportController } from './restaurant-employee-target-report.controller';
import { RestaurantEmployeeTargetReportEntity } from './restaurant-employee-target-report.entity/restaurant-employee-target-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEmployeeTargetReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
RestaurantEmployeeTargetReportModule
],
  providers: [RestaurantEmployeeTargetReportService],
  controllers: [RestaurantEmployeeTargetReportController]
})
export class RestaurantEmployeeTargetReportModule {}
