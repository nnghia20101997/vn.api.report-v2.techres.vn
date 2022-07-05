import { Response } from "express";
import { AdminSalerDetailReportQueryDTO } from "./admin-saler-detail-report.dto/admin-saler-detail-report.query.dto";
import { AdminSalerDetailReportService } from "./admin-saler-detail-report.service";
export declare class AdminSalerDetailReportController {
    private adminSalerDetailReportService;
    constructor(adminSalerDetailReportService: AdminSalerDetailReportService);
    spGRpAdminSalerDetailReport(adminSalerDetailReportQueryDTO: AdminSalerDetailReportQueryDTO, res: Response): Promise<any>;
}
