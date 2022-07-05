"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTotalAllLocationWithBestSalesResultsReportResponse = void 0;
class AdminTotalAllLocationWithBestSalesResultsReportResponse {
    constructor(AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity) {
        this.total_orders = AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity
            ? +AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity.total_orders
            : 0;
        this.total_amount = AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity
            ? +AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity.total_amount
            : 0;
    }
}
exports.AdminTotalAllLocationWithBestSalesResultsReportResponse = AdminTotalAllLocationWithBestSalesResultsReportResponse;
//# sourceMappingURL=admin-total-all-location-with-best-sales-results-report.response.js.map