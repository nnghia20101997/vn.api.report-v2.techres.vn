import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantInformationInAlolineReportService } from './restaurant-information-in-aloline-report.service';
import { RestaurantInformationInAlolineReportController } from './restaurant-information-in-aloline-report.controller';
import { RestaurantInformationInAlolineReportEntity } from './restaurant-information-in-aloline-report.entity/restaurant-information-in-aloline-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantInformationInAlolineReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
RestaurantInformationInAlolineReportModule
],
  providers: [RestaurantInformationInAlolineReportService],
  controllers: [RestaurantInformationInAlolineReportController]
})
export class RestaurantInformationInAlolineReportModule {}
