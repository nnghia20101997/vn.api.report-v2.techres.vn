import { AdminBranchReporDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportOutputEntity } from "../admin-branch-report.entity/admin-branch-report.output.entity";

export class AdminBranchReportOutputResponse {

    list: AdminBranchReporDataModelEntity[];

    adminBranchReportOutputEntity : AdminBranchReportOutputEntity;

    constructor(adminBranchReporDataModelEntity: AdminBranchReporDataModelEntity[],adminBranchReportOutputEntity:AdminBranchReportOutputEntity)
{
    this.list = adminBranchReporDataModelEntity;
    this.adminBranchReportOutputEntity = adminBranchReportOutputEntity;  
} 
}
