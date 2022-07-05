"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCustomerAlolineReportResponse = void 0;
class AdminCustomerAlolineReportResponse {
    constructor(adminCustomerAlolineReportEntity) {
        this.total_customers = adminCustomerAlolineReportEntity
            ? +adminCustomerAlolineReportEntity.total_customers
            : 0;
        this.total_active = adminCustomerAlolineReportEntity
            ? +adminCustomerAlolineReportEntity.total_active
            : 0;
        this.total_unactive = adminCustomerAlolineReportEntity
            ? +adminCustomerAlolineReportEntity.total_unactive
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminCustomerAlolineReportResponse(e));
        });
        return response;
    }
}
exports.AdminCustomerAlolineReportResponse = AdminCustomerAlolineReportResponse;
//# sourceMappingURL=supplier-overview-report.response.js.map