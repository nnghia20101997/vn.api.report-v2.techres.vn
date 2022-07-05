import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { RestaurantMembershipCardLevelReportService } from './restaurant-membership-card-level-report.service';
import { RestaurantMembershipCardLevelReportController } from './restaurant-membership-card-level-report.controller';
import { RestaurantMembershipCardLevelReportEntity } from './restaurant-membership-card-level-report.entity/restaurant-membership-card-level-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantMembershipCardLevelReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
  RestaurantMembershipCardLevelReportModule
],
  providers: [RestaurantMembershipCardLevelReportService],
  controllers: [RestaurantMembershipCardLevelReportController]
})
export class RestaurantMembershipCardLevelReportModule {}
