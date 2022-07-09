"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminBranchReportResponse = void 0;
class AdminBranchReportResponse {
    constructor(adminBranchReportDataModelEntity) {
        this.id = adminBranchReportDataModelEntity ? +adminBranchReportDataModelEntity.id : 0;
        this.name = adminBranchReportDataModelEntity ? adminBranchReportDataModelEntity.name : "";
        this.phone_number = adminBranchReportDataModelEntity
            ? adminBranchReportDataModelEntity.phone_number
            : "";
        this.address_full_text = adminBranchReportDataModelEntity
            ? adminBranchReportDataModelEntity.address_full_text
            : "";
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminBranchReportResponse(e));
        });
        return response;
    }
}
exports.AdminBranchReportResponse = AdminBranchReportResponse;
//# sourceMappingURL=admin-branch-report.response.js.map