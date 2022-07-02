"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminBestSalerGravityReportResponse = void 0;
class AdminBestSalerGravityReportResponse {
    constructor(adminBestSalerGravityReportDataModelEntity) {
        this.saler_id = adminBestSalerGravityReportDataModelEntity
            ? +adminBestSalerGravityReportDataModelEntity.saler_id
            : 0;
        this.name = adminBestSalerGravityReportDataModelEntity
            ? adminBestSalerGravityReportDataModelEntity.name
            : "";
        this.gravity = adminBestSalerGravityReportDataModelEntity
            ? +adminBestSalerGravityReportDataModelEntity.gravity
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminBestSalerGravityReportResponse(e));
        });
        return response;
    }
}
exports.AdminBestSalerGravityReportResponse = AdminBestSalerGravityReportResponse;
//# sourceMappingURL=admin-best-saler-gravity-report.response.js.map