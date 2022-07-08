import { Module } from '@nestjs/common';
import { SupplierWarehouseMaterialReportService } from './supplier-warehouse-material-report.service';
import { SupplierWarehouseMaterialReportController } from './supplier-warehouse-material-report.controller';
import { SupplierWarehouseMaterialReportEntity } from './supplier-warehouse-material-report.entity/supplier-warehouse-material-report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierWarehouseMaterialReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    SupplierWarehouseMaterialReportModule,
  ],
  providers: [SupplierWarehouseMaterialReportService],
  controllers: [SupplierWarehouseMaterialReportController]
})
export class SupplierWarehouseMaterialReportModule {}
