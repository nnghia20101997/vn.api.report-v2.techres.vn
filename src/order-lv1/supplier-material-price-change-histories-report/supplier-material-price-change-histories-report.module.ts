import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';import { SupplierMaterialPriceChangeHistoriesReportService } from './supplier-material-price-change-histories-report.service';
import { SupplierMaterialPriceChangeHistoriesReportController } from './supplier-material-price-change-histories-report.controller';
import { SupplierMaterialPriceChangeHistoriesReportEntity } from './supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierMaterialPriceChangeHistoriesReportEntity
  ]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
  secret : process.env.SECRET_TOKEN,
}),
  SupplierMaterialPriceChangeHistoriesReportModule
],
  providers: [SupplierMaterialPriceChangeHistoriesReportService],
  controllers: [SupplierMaterialPriceChangeHistoriesReportController]
})
export class SupplierMaterialPriceChangeHistoriesReportModule {}
