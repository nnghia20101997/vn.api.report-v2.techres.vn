import { AdminLocationWithBestSalesResultsReportDataModelEntity } from "../admin-location-with-best-sales-results-report.entity/admin-location-with-best-sales-results-report.data.model.entity";
export declare class AdminLocationWithBestSalesResultsReportResponse {
    city_id: number;
    city_name: string;
    total_orders: number;
    total_amount: number;
    constructor(adminLocationWithBestSalesResultsReportDataModelEntity?: AdminLocationWithBestSalesResultsReportDataModelEntity);
    mapToList(data: AdminLocationWithBestSalesResultsReportDataModelEntity[]): {};
}
