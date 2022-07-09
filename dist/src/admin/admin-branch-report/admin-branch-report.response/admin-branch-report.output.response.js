"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminBranchReportOutputResponse = void 0;
class AdminBranchReportOutputResponse {
    constructor(adminBranchReportDataModelEntity, adminBranchReportOutputEntity) {
        this.total_branch = 0;
        this.total_operating_branches = 0;
        this.branch_office_is_closed = 0;
        this.list = adminBranchReportDataModelEntity;
        this.total_branch = adminBranchReportOutputEntity.total_branch ? +adminBranchReportOutputEntity.total_branch : 0;
        this.total_operating_branches = adminBranchReportOutputEntity.total_operating_branches ? +adminBranchReportOutputEntity.total_operating_branches : 0;
        this.branch_office_is_closed = adminBranchReportOutputEntity.branch_office_is_closed ? +adminBranchReportOutputEntity.branch_office_is_closed : 0;
    }
}
exports.AdminBranchReportOutputResponse = AdminBranchReportOutputResponse;
//# sourceMappingURL=admin-branch-report.output.response.js.map