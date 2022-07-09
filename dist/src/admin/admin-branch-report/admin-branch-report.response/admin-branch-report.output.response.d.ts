import { AdminBranchReportDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportOutputEntity } from "../admin-branch-report.entity/admin-branch-report.output.entity";
export declare class AdminBranchReportOutputResponse {
    list: AdminBranchReportDataModelEntity[];
    total_branch: number;
    total_operating_branches: number;
    branch_office_is_closed: number;
    constructor(adminBranchReportDataModelEntity: AdminBranchReportDataModelEntity[], adminBranchReportOutputEntity: AdminBranchReportOutputEntity);
}
