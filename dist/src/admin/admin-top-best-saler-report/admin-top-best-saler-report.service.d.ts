import { Repository } from "typeorm";
import { AdminTopBestSalerReportDataModelEntity } from "./admin-top-best-saler-report.entity/admin-top-best-saler-report.data.model.entity";
export declare class AdminTopBestSalerReportService {
    private adminTopBestSalerReportDataModelEntity;
    constructor(adminTopBestSalerReportDataModelEntity: Repository<AdminTopBestSalerReportDataModelEntity>);
    spGRpAdminTopBestSalerReport(fromDate: string, toDate: string, _offset: number, _limit: number): Promise<AdminTopBestSalerReportDataModelEntity[]>;
}
