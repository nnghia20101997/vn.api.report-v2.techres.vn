import { Repository } from "typeorm";
import { AdminBestSalerGravityReportDataModelEntity } from "./admin-best-saler-gravity-report.entity/admin-best-saler-gravity-report.data.model.entity";
export declare class AdminBestSalerGravityReportService {
    private adminBestSalerGravityReportDataModelEntity;
    constructor(adminBestSalerGravityReportDataModelEntity: Repository<AdminBestSalerGravityReportDataModelEntity>);
    spGRpAdminBestSalerGravityReport(fromDate: string, toDate: string): Promise<AdminBestSalerGravityReportDataModelEntity[]>;
}
