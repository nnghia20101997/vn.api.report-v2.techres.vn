import { Response } from "express";
import { AdminBestSalerGravityReportQueryDTO } from "./admin-best-saler-gravity-report.dto/admin-best-saler-gravity-report.query.dto";
import { AdminBestSalerGravityReportService } from "./admin-best-saler-gravity-report.service";
export declare class AdminBestSalerGravityReportController {
    private adminBestSalerGravityReportService;
    constructor(adminBestSalerGravityReportService: AdminBestSalerGravityReportService);
    spGRpAdminBestSalerGravityReport(adminBestSalerGravityReportQueryDTO: AdminBestSalerGravityReportQueryDTO, res: Response): Promise<any>;
}
