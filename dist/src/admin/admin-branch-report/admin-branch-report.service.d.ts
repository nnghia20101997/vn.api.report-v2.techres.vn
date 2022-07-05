import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { AdminBranchReportDataModelEntity } from "./admin-branch-report.entity/admin-branch-report.entity";
export declare class AdminBranchReportService {
    private adminBranchReportDataModelEntity;
    constructor(adminBranchReportDataModelEntity: Repository<AdminBranchReportDataModelEntity>);
    spGRpAdminBranchReport(status: number): Promise<StoreProcedureOutputResultInterface<AdminBranchReportDataModelEntity, object>>;
}
