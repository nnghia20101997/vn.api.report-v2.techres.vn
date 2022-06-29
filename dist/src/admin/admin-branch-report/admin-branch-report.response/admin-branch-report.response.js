"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminBranchReportResponse = void 0;
class AdminBranchReportResponse {
    constructor(adminBranchReporDataModelEntity) {
        this.id = adminBranchReporDataModelEntity ? +adminBranchReporDataModelEntity.id : 0;
        this.name = adminBranchReporDataModelEntity ? adminBranchReporDataModelEntity.name : "";
        this.phone_number = adminBranchReporDataModelEntity
            ? adminBranchReporDataModelEntity.phone_number
            : "";
        this.address_full_text = adminBranchReporDataModelEntity
            ? adminBranchReporDataModelEntity.address_full_text
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