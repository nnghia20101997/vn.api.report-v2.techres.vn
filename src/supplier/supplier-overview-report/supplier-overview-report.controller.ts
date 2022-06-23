import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { Response } from "express";
import { SupplierOverviewReportEntity } from "./supplier-overview-report.entity/supplier-overview-report.entity";
import { SupplierOverviewReportResponse } from "./supplier-overview-report.response/supplier-overview-report.response";
import { SupplierOverviewReportService } from "./supplier-overview-report.service";
import { SupplierOverviewReportQueryDto } from "./supplier_overview-report.dto/supplier_overview-report.query.dto";

@Controller("api/supplier-overview-report")
export class SupplierOverviewReportController {
  constructor(
    private supplierOverviewReportService: SupplierOverviewReportService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpSupplierOverviewReport(
    @Query() supplierOverviewReportQueryDto: SupplierOverviewReportQueryDto,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let supplierOverviewReport: SupplierOverviewReportEntity =
      await this.supplierOverviewReportService.spGRpSupplierOverviewReport(
        supplierOverviewReportQueryDto.supplier_id,
        supplierOverviewReportQueryDto.restaurant_id,
        supplierOverviewReportQueryDto.branch_id,
        supplierOverviewReportQueryDto.from_date,
        supplierOverviewReportQueryDto.to_date
      );

    response.setData(
      new SupplierOverviewReportResponse(supplierOverviewReport)
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
