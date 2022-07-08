import { Module } from '@nestjs/common';
import { SupplierWarehouseSesssionReportService } from './supplier-warehouse-sesssion-report.service';
import { SupplierWarehouseSesssionReportController } from './supplier-warehouse-sesssion-report.controller';
import { SupplierWarehouseSesssionReportEntity } from './supplier-warehouse-sesssion-report.entity/supplier-warehouse-sesssion-report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierWarehouseSesssionReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    SupplierWarehouseSesssionReportModule,
  ],
  providers: [SupplierWarehouseSesssionReportService],
  controllers: [SupplierWarehouseSesssionReportController]
})
export class SupplierWarehouseSesssionReportModule { }
