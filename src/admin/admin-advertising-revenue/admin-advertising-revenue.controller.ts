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
import { AdminAdvertisingRevenueQueryDTO } from "./admin-advertising-revenue.dto/admin-advertising-revenue.query.dto";
import { AdminAdvertisingRevenueEntity } from "./admin-advertising-revenue.entity/admin-advertising-revenue.entity";
import { AdminAdvertisingRevenueResponse } from "./admin-advertising-revenue.response/admin-advertising-revenue.response";
import { AdminAdvertisingRevenueService } from "./admin-advertising-revenue.service";
import { StoreProcedureGetTimeDatabase } from "src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database";
import { GetTimeDataBase } from "src/utils.common/utils.format-time.common/utils.get.time.database";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import console from "console";

@Controller("/api/admin-advertising-revenue")
export class AdminAdvertisingRevenueController {
  constructor(
    private adminAdvertisingRevenueService: AdminAdvertisingRevenueService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query() adminAdvertisingRevenueQueryDTO: AdminAdvertisingRevenueQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();
    let fromDate = "";
    let toDate = "";
    let groupByType = 2;
    if (
      adminAdvertisingRevenueQueryDTO.from_date == "" ||
      adminAdvertisingRevenueQueryDTO.to_date == ""
    ) {
      let reportTime: GetTimeDataBase = new StoreProcedureGetTimeDatabase(
        adminAdvertisingRevenueQueryDTO.report_type,adminAdvertisingRevenueQueryDTO.from_date
      ).getTimeReport();
      fromDate = reportTime.from_date;
      toDate = reportTime.to_date;
      groupByType = reportTime.group_type;

      console.log(reportTime);
      
    } else {
      fromDate = UtilsDate.formatDateInsertDatabase(
        adminAdvertisingRevenueQueryDTO.from_date
      );
      toDate = UtilsDate.formatDateInsertDatabase(
        adminAdvertisingRevenueQueryDTO.to_date
      );
    }

    let time = new StoreProcedureGetTimeDatabase(
      adminAdvertisingRevenueQueryDTO.report_type
    ).getTimeType();

    let adminAdvertisingRevenue: AdminAdvertisingRevenueEntity[] =
      await this.adminAdvertisingRevenueService.spGRpAdminAdvertisingRevenue(
        fromDate,
        toDate,
        groupByType
      );
    response.setData(
      new AdminAdvertisingRevenueResponse().mapToList(adminAdvertisingRevenue)
    );

    return res.status(HttpStatus.OK).send(response);
  }
}
