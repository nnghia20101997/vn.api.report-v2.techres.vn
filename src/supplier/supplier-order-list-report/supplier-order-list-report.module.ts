import { Module } from '@nestjs/common';
import { SupplierOrderListReportService } from './supplier-order-list-report.service';
import { SupplierOrderListReportController } from './supplier-order-list-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierOrderListReportEntity } from './supplier-order-list-report.entity/supplier-order-list-report.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierOrderListReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    SupplierOrderListReportModule,
  ],
  providers: [SupplierOrderListReportService],
  controllers: [SupplierOrderListReportController]
})
export class SupplierOrderListReportModule { }
