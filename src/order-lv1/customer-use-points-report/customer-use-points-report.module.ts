import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CustomerUsePointsReportService } from './customer-use-points-report.service';
import { CustomerUsePointsReportController } from './customer-use-points-report.controller';
import { CustomerUsePointsReportEntity } from './customer-use-points-report.entity/customer-use-points-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerUsePointsReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
CustomerUsePointsReportModule
],
  providers: [CustomerUsePointsReportService],
  controllers: [CustomerUsePointsReportController]
})
export class CustomerUsePointsReportModule {}
