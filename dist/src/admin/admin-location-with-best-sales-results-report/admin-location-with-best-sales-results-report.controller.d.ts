import { Response } from "express";
import { AdminLocationWithBestSalesResultsReportQueryDTO } from "./admin-location-with-best-sales-results-report.dto/admin-location-with-best-sales-results-report.query.dto";
import { AdminLocationWithBestSalesResultsReportService } from "./admin-location-with-best-sales-results-report.service";
export declare class AdminLocationWithBestSalesResultsReportController {
    private adminLocationWithBestSalesResultsReportService;
    constructor(adminLocationWithBestSalesResultsReportService: AdminLocationWithBestSalesResultsReportService);
    spGRpAdminAdvertisingRevenue(adminLocationWithBestSalesResultsReportQueryDTO: AdminLocationWithBestSalesResultsReportQueryDTO, res: Response): Promise<any>;
}
