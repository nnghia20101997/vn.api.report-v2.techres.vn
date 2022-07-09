import { AdminTopBestSalerReportDataModelEntity } from "../admin-top-best-saler-report.entity/admin-top-best-saler-report.data.model.entity";
export declare class AdminTopBestSalerReportResponse {
    saler_id: number;
    name: string;
    total_order: number;
    constructor(adminTopBestSalerReportDataModelEntity?: AdminTopBestSalerReportDataModelEntity);
    mapToList(data: AdminTopBestSalerReportDataModelEntity[]): {};
}
