import { Module } from '@nestjs/common';
import { TmsCustomerReportService } from './tms-customer-report.service';
import { TmsCustomerReportController } from './tms-customer-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmsCustomerReportEntity } from './tms-customer-report.entity/tms-customer-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    TypeOrmModule.forFeature([TmsCustomerReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TmsCustomerReportModule,
  ],

  providers: [TmsCustomerReportService],
  controllers: [TmsCustomerReportController]
})
export class TmsCustomerReportModule {}



