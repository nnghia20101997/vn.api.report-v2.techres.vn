import { Repository } from "typeorm";
import { AdminLocationWithBestSalesResultsReportDataModelEntity } from "./admin-location-with-best-sales-results-report.entity/admin-location-with-best-sales-results-report.data.model.entity";
export declare class AdminLocationWithBestSalesResultsReportService {
    private adminLocationWithBestSalesResultsReportDataModelEntity;
    constructor(adminLocationWithBestSalesResultsReportDataModelEntity: Repository<AdminLocationWithBestSalesResultsReportDataModelEntity>);
    spGRpAdminLocationWithBestSalesResultsReport(fromDate: string, toDate: string): Promise<AdminLocationWithBestSalesResultsReportDataModelEntity[]>;
}
