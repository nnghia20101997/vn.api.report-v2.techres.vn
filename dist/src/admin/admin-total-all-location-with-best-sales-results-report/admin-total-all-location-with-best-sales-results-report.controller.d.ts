import { Response } from "express";
import { AdminTotalAllLocationWithBestSalesResultsReportQueryDTO } from "./admin-total-all-location-with-best-sales-results-report.dto/admin-total-all-location-with-best-sales-results-report.query.dto";
import { AdminTotalAllLocationWithBestSalesResultsReportService } from "./admin-total-all-location-with-best-sales-results-report.service";
export declare class AdminTotalAllLocationWithBestSalesResultsReportController {
    private adminTotalAllLocationWithBestSalesResultsReportService;
    constructor(adminTotalAllLocationWithBestSalesResultsReportService: AdminTotalAllLocationWithBestSalesResultsReportService);
    spGRpAdminAdvertisingRevenue(adminTotalAllLocationWithBestSalesResultsReportQueryDTO: AdminTotalAllLocationWithBestSalesResultsReportQueryDTO, res: Response): Promise<any>;
}
