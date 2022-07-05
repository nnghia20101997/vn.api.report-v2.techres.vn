import { Response } from "express";
import { AdminBranchReportQueryDTO } from "./admin-branch-report.dto/admin-branch-report.query.dto";
import { AdminBranchReportService } from "./admin-branch-report.service";
export declare class AdminTopTenProductBestSellerDetailController {
    private adminBranchReportService;
    constructor(adminBranchReportService: AdminBranchReportService);
    spGRpAdminAdvertisingRevenue(adminBranchReportQueryDTO: AdminBranchReportQueryDTO, res: Response): Promise<any>;
}
