import { Response } from "express";
import { AdminTopBestSalerReportQueryDTO } from "./admin-top-best-saler-report.dto/admin-top-best-saler-report.query.dto";
import { AdminTopBestSalerReportService } from "./admin-top-best-saler-report.service";
export declare class AdminTopTenProductBestSellerDetailController {
    private adminTopBestSalerReportService;
    constructor(adminTopBestSalerReportService: AdminTopBestSalerReportService);
    spGRpAdminAdvertisingRevenue(adminTopBestSalerReportQueryDTO: AdminTopBestSalerReportQueryDTO, res: Response): Promise<any>;
}
