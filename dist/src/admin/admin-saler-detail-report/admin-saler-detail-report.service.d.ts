import { Repository } from "typeorm";
import { AdminSalerDetailReportDataModelEntity } from "./admin-saler-detail-report.entity/admin-saler-detail-report.data.model.entity";
export declare class AdminSalerDetailReportService {
    private adminSalerDetailReportDataModelEntity;
    constructor(adminSalerDetailReportDataModelEntity: Repository<AdminSalerDetailReportDataModelEntity>);
    spGRpAdminTopBestSalerReport(fromDate: string, toDate: string): Promise<AdminSalerDetailReportDataModelEntity[]>;
}
