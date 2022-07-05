import { Response } from "express";
import { AdminTotalAllSalerReportQueryDTO } from "./admin-total-all-saler-report.dto/admin-total-all-saler-report.query.dto";
import { AdminTotalAllSalerReportService } from "./admin-total-all-saler-report.service";
export declare class AdminTotalAllSalerReportController {
    private adminTotalAllSalerReportService;
    constructor(adminTotalAllSalerReportService: AdminTotalAllSalerReportService);
    spGRpAdminTotalAllSalerReport(adminTotalAllSalerReportQueryDTO: AdminTotalAllSalerReportQueryDTO, res: Response): Promise<any>;
}
