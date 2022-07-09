"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRevenueReportByTimeResponse = void 0;
class SupplierRevenueReportByTimeResponse {
    constructor(entity) {
        this.report_time = entity ? entity.report_time : "";
        this.supplier_revenue = entity ? +entity.supplier_revenue : 0;
        this.supplier_cost = entity ? +entity.supplier_cost : 0;
        this.supplier_profit = entity ? +entity.supplier_profit : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new SupplierRevenueReportByTimeResponse(e));
        });
        return response;
    }
}
exports.SupplierRevenueReportByTimeResponse = SupplierRevenueReportByTimeResponse;
//# sourceMappingURL=supplier-revenue-report-by-time.response.js.map