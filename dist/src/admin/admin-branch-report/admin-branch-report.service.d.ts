import { Repository } from "typeorm";
import { AdminBranchReporDataModelEntity } from "./admin-branch-report.entity/admin-branch-report.entity";
export declare class AdminBranchReportService {
    private adminBranchReporDataModelEntity;
    constructor(adminBranchReporDataModelEntity: Repository<AdminBranchReporDataModelEntity>);
    spGRpAdminBranchReport(status: number): Promise<AdminBranchReporDataModelEntity[]>;
}
