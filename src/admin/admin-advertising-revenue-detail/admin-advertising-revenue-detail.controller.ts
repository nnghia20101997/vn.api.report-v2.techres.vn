import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import console from "console";
import { Response } from "express";
import { StoreProcedureGetTimeDatabase } from "src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { GetTimeDataBase } from "src/utils.common/utils.format-time.common/utils.get.time.database";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminAdvertisingRevenueDetailQueryDTO } from "./admin-advertising-revenue-detail.dto/admin-advertising-revenue-detail.query.dto";
import { AdminAdvertisingRevenueDetailDataModelEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";
import { AdminAdvertisingRevenueDetailResponse } from "./admin-advertising-revenue-detail.response/admin-advertising-revenue-detail.response";
import { AdminAdvertisingRevenueDetailService } from "./admin-advertising-revenue-detail.service";

@Controller("/api/admin-advertising-revenue-detail")
export class AdminAdvertisingRevenueDetailController {
  constructor(
    private adminAdvertisingRevenueDetailService: AdminAdvertisingRevenueDetailService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query()
    adminAdvertisingRevenueDetailQueryDTO: AdminAdvertisingRevenueDetailQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();
    let fromDate = "";
    let toDate = "";
    let groupByType = 2;

    if (
      adminAdvertisingRevenueDetailQueryDTO.from_date == "" ||
      adminAdvertisingRevenueDetailQueryDTO.to_date == ""
    ) {
      let reportTime: GetTimeDataBase = new StoreProcedureGetTimeDatabase(
        adminAdvertisingRevenueDetailQueryDTO.report_type
      ).getTimeReport();
      fromDate = reportTime.from_date;
      toDate = reportTime.to_date;
      groupByType = reportTime.group_type;
    } else {
      
      fromDate = UtilsDate.formatDateInsertDatabase(
        adminAdvertisingRevenueDetailQueryDTO.from_date
      );
      toDate = UtilsDate.formatDateInsertDatabase(
        adminAdvertisingRevenueDetailQueryDTO.to_date
      );
    }

    let result: AdminAdvertisingRevenueDetailDataModelEntity[] =
      await this.adminAdvertisingRevenueDetailService.spGRpAdminAdvertisingRevenueDetail(
        adminAdvertisingRevenueDetailQueryDTO.branch_id,
        groupByType,
        fromDate,
        toDate,
        adminAdvertisingRevenueDetailQueryDTO._offset,
        adminAdvertisingRevenueDetailQueryDTO._limit
      );
    response.setData(
      new AdminAdvertisingRevenueDetailResponse().mapToList(result)
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
