import { Module } from '@nestjs/common';
import { SupplierOrderListReportService } from './supplier-order-list-report.service';
import { SupplierOrderListReportController } from './supplier-order-list-report.controller';

@Module({
  providers: [SupplierOrderListReportService],
  controllers: [SupplierOrderListReportController]
})
export class SupplierOrderListReportModule {}
