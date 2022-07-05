"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTopBestSalerReportResponse = void 0;
class AdminTopBestSalerReportResponse {
    constructor(adminTopBestSalerReportDataModelEntity) {
        this.saler_id = adminTopBestSalerReportDataModelEntity
            ? +adminTopBestSalerReportDataModelEntity.saler_id
            : 0;
        this.name = adminTopBestSalerReportDataModelEntity
            ? adminTopBestSalerReportDataModelEntity.name
            : "";
        this.total_order = adminTopBestSalerReportDataModelEntity
            ? +adminTopBestSalerReportDataModelEntity.total_order
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminTopBestSalerReportResponse(e));
        });
        return response;
    }
}
exports.AdminTopBestSalerReportResponse = AdminTopBestSalerReportResponse;
//# sourceMappingURL=admin-top-best-saler-report.response.js.map