import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { WarehouseSessionTotalImportExportAmountReportService } from './warehouse-session-total-import-export-amount-report.service';
import { WarehouseSessionTotalImportExportAmountReportController } from './warehouse-session-total-import-export-amount-report.controller';
import { WarehouseSessionTotalImportExportAmountReportEntity } from './warehouse-session-total-import-export-amount-report.entity/warehouse-session-total-import-export-amount-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseSessionTotalImportExportAmountReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
WarehouseSessionTotalImportExportAmountReportModule
],
  providers: [WarehouseSessionTotalImportExportAmountReportService],
  controllers: [WarehouseSessionTotalImportExportAmountReportController]
})
export class WarehouseSessionTotalImportExportAmountReportModule {}
