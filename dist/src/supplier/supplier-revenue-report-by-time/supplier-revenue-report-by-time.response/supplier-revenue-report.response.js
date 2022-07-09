"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRevenueReportResponse = void 0;
const supplier_revenue_report_by_time_response_1 = require("./supplier-revenue-report-by-time.response");
class SupplierRevenueReportResponse {
    constructor(output, list) {
        this.total_revenue = output ? +output.total_revenue : 0;
        this.total_cost = output ? +output.total_cost : 0;
        this.total_profit = output ? +output.total_profit : 0;
        this.profit_percent = output ? +output.profit_percent : 0;
        this.data = new supplier_revenue_report_by_time_response_1.SupplierRevenueReportByTimeResponse().mapToList(list);
    }
}
exports.SupplierRevenueReportResponse = SupplierRevenueReportResponse;
//# sourceMappingURL=supplier-revenue-report.response.js.map