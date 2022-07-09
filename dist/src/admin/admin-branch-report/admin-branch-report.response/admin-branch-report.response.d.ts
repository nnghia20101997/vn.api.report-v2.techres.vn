import { AdminBranchReportDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";
export declare class AdminBranchReportResponse {
    id: number;
    name: string;
    phone_number: string;
    address_full_text: string;
    constructor(adminBranchReportDataModelEntity?: AdminBranchReportDataModelEntity);
    mapToList(data: AdminBranchReportDataModelEntity[]): {};
}
