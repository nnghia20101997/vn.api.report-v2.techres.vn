import { Repository } from "typeorm";
import { AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity } from "./admin-total-all-location-with-best-sales-results-report.entity/admin-total-all-location-with-best-sales-results-report.data.model.entity";
export declare class AdminTotalAllLocationWithBestSalesResultsReportService {
    private adminTotalAllLocationWithBestSalesResultsReportDataModelEntity;
    constructor(adminTotalAllLocationWithBestSalesResultsReportDataModelEntity: Repository<AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity>);
    spGRpAdminTotalAllLocationWithBestSalesResultsReport(fromDate: string, toDate: string): Promise<AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity>;
}
