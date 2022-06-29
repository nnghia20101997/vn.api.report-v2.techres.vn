import {
    Controller,
    Get,
    HttpStatus,
    Query,
    Res,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { Response } from "express";
import { AdminAdvertisingRevenueQueryDTO } from "./admin-advertising-revenue.dto/admin-advertising-revenue.query.dto";
import { AdminAdvertisingRevenueEntity } from "./admin-advertising-revenue.entity/admin-advertising-revenue.entity";
import { AdminAdvertisingRevenueResponse } from "./admin-advertising-revenue.response/admin-advertising-revenue.response";
import { AdminAdvertisingRevenueService } from "./admin-advertising-revenue.service";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";

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

        let adminAdvertisingRevenue: AdminAdvertisingRevenueEntity[] =
            await this.adminAdvertisingRevenueService.spGRpAdminAdvertisingRevenue(
                UtilsDate.formatDateInsertDatabase(adminAdvertisingRevenueQueryDTO.from_date),
                UtilsDate.formatDateInsertDatabase(adminAdvertisingRevenueQueryDTO.to_date),
                adminAdvertisingRevenueQueryDTO.report_type
            );
        response.setData(
            new AdminAdvertisingRevenueResponse().mapToList(adminAdvertisingRevenue)
        );
        return res.status(HttpStatus.OK).send(response);
    }
}
