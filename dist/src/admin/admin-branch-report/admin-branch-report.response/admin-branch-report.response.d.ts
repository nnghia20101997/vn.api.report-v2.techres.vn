import { AdminBranchReporDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";
export declare class AdminBranchReportResponse {
    id: number;
    name: string;
    phone_number: string;
    address_full_text: string;
    constructor(adminBranchReporDataModelEntity?: AdminBranchReporDataModelEntity);
    mapToList(data: AdminBranchReporDataModelEntity[]): AdminBranchReportResponse[];
}
