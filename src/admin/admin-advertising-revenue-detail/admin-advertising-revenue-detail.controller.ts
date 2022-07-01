import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Response } from "express";
import { StoreProcedureGetTimeDatabase } from "src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database";
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

    let time = new StoreProcedureGetTimeDatabase(
      adminAdvertisingRevenueDetailQueryDTO.report_type
    ).getTimeType();

    console.log("time", time.from_date, time.to_date, time.group_type);

    let result: AdminAdvertisingRevenueDetailDataModelEntity[] =
      await this.adminAdvertisingRevenueDetailService.spGRpAdminAdvertisingRevenueDetail(
        adminAdvertisingRevenueDetailQueryDTO.branch_id,
        time.group_type,
        time.from_date,
        time.to_date,
        adminAdvertisingRevenueDetailQueryDTO._offset,
        adminAdvertisingRevenueDetailQueryDTO._limit
      );
    response.setData(
      new AdminAdvertisingRevenueDetailResponse().mapToList(result)
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
