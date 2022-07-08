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

    let time = new StoreProcedureGetTimeDatabase(
      adminAdvertisingRevenueQueryDTO.report_type
    ).getTimeType();

    console.log("time", time.from_date, time.to_date, time.group_type);
    
    let adminAdvertisingRevenue: AdminAdvertisingRevenueEntity[] =
      await this.adminAdvertisingRevenueService.spGRpAdminAdvertisingRevenue(
        time.from_date,
        time.to_date,
        time.group_type
      );
    response.setData(
      new AdminAdvertisingRevenueResponse().mapToList(adminAdvertisingRevenue)
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
