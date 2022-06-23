import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SupplierOverviewReportController } from "./supplier-overview-report.controller";
import { SupplierOverviewReportEntity } from "./supplier-overview-report.entity/supplier-overview-report.entity";
import { SupplierOverviewReportService } from "./supplier-overview-report.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierOverviewReportEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    SupplierOverviewReportModule,
  ],
  controllers: [SupplierOverviewReportController],
  providers: [SupplierOverviewReportService],
})
export class SupplierOverviewReportModule {}
