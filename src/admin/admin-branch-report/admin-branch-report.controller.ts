import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminBranchReportQueryDTO } from "./admin-branch-report.dto/admin-branch-report.query.dto";
import { AdminBranchReporDataModelEntity } from "./admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportResponse } from "./admin-branch-report.response/admin-branch-report.response";
import { AdminBranchReportService } from "./admin-branch-report.service";

@Controller("/api/admin-branch-report")
export class AdminTopTenProductBestSellerDetailController{
    constructor(
        private adminBranchReportService : AdminBranchReportService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpAdminAdvertisingRevenue(
        @Query() adminBranchReportQueryDTO: AdminBranchReportQueryDTO,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();

        let result: AdminBranchReporDataModelEntity[] =
            await this.adminBranchReportService.spGRpAdminBranchReport(
                adminBranchReportQueryDTO.status
            );
        response.setData(
            new AdminBranchReportResponse().mapToList(result)
        );
        return res.status(HttpStatus.OK).send(response);
    }
}