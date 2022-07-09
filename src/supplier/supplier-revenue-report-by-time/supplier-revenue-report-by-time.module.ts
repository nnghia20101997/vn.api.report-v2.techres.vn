import { Module } from '@nestjs/common';
import { SupplierRevenueReportByTimeService } from './supplier-revenue-report-by-time.service';
import { SupplierRevenueReportByTimeController } from './supplier-revenue-report-by-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { SupplierRevenueReportEntity } from './supplier-revenue-report-by-time.entity/supplier-revenue-report-by-time.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierRevenueReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    SupplierRevenueReportByTimeModule,
  ],
  providers: [SupplierRevenueReportByTimeService],
  controllers: [SupplierRevenueReportByTimeController]
})
export class SupplierRevenueReportByTimeModule { }
