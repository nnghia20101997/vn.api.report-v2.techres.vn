import { AdminBranchReportDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportOutputEntity } from "../admin-branch-report.entity/admin-branch-report.output.entity";

export class AdminBranchReportOutputResponse {

    list: AdminBranchReportDataModelEntity[];

    adminBranchReportOutputEntity : AdminBranchReportOutputEntity;

    constructor(adminBranchReportDataModelEntity: AdminBranchReportDataModelEntity[],adminBranchReportOutputEntity:AdminBranchReportOutputEntity)
{
    this.list = adminBranchReportDataModelEntity;
    this.adminBranchReportOutputEntity = adminBranchReportOutputEntity;  
} 
}
