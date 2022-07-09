"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLocationWithBestSalesResultsReportResponse = void 0;
class AdminLocationWithBestSalesResultsReportResponse {
    constructor(adminLocationWithBestSalesResultsReportDataModelEntity) {
        this.city_id = adminLocationWithBestSalesResultsReportDataModelEntity
            ? +adminLocationWithBestSalesResultsReportDataModelEntity.city_id
            : 0;
        this.city_name = adminLocationWithBestSalesResultsReportDataModelEntity
            ? adminLocationWithBestSalesResultsReportDataModelEntity.city_name
            : "";
        this.total_orders = adminLocationWithBestSalesResultsReportDataModelEntity
            ? +adminLocationWithBestSalesResultsReportDataModelEntity.total_orders
            : 0;
        this.total_amount = adminLocationWithBestSalesResultsReportDataModelEntity
            ? +adminLocationWithBestSalesResultsReportDataModelEntity.total_amount
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminLocationWithBestSalesResultsReportResponse(e));
        });
        return response;
    }
}
exports.AdminLocationWithBestSalesResultsReportResponse = AdminLocationWithBestSalesResultsReportResponse;
//# sourceMappingURL=admin-location-with-best-sales-results-report.response.js.map