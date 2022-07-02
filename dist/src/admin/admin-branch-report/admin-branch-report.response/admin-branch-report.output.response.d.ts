import { AdminBranchReportDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportOutputEntity } from "../admin-branch-report.entity/admin-branch-report.output.entity";
export declare class AdminBranchReportOutputResponse {
    list: AdminBranchReportDataModelEntity[];
    adminBranchReportOutputEntity: AdminBranchReportOutputEntity;
    constructor(adminBranchReportDataModelEntity: AdminBranchReportDataModelEntity[], adminBranchReportOutputEntity: AdminBranchReportOutputEntity);
}
