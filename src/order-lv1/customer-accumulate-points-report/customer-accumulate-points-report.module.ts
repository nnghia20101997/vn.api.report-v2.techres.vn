import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';import { CustomerAccumulatePointsReportService } from './customer-accumulate-points-report.service';
import { CustomerAccumulatePointsReportController } from './customer-accumulate-points-report.controller';
import { CustomerAccumulatePointsReportEntity } from './customer-accumulate-points-report.entity/customer-accumulate-points-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerAccumulatePointsReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
  CustomerAccumulatePointsReportModule
],
  providers: [CustomerAccumulatePointsReportService],
  controllers: [CustomerAccumulatePointsReportController]
})
export class CustomerAccumulatePointsReportModule {}
