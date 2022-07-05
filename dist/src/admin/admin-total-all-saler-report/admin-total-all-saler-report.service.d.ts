import { Repository } from "typeorm";
import { AdminTotalAllSalerReportDataModelEntity } from "./admin-total-all-saler-report.entity/admin-total-all-saler-report.data.model.entity";
export declare class AdminTotalAllSalerReportService {
    private adminTotalAllSalerReportDataModelEntity;
    constructor(adminTotalAllSalerReportDataModelEntity: Repository<AdminTotalAllSalerReportDataModelEntity>);
    spGRpAdminTotalAllSalerReport(fromDate: string, toDate: string): Promise<AdminTotalAllSalerReportDataModelEntity>;
}
