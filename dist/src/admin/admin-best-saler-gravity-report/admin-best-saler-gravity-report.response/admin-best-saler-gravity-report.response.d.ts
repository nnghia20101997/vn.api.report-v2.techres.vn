import { AdminBestSalerGravityReportDataModelEntity } from "../admin-best-saler-gravity-report.entity/admin-best-saler-gravity-report.data.model.entity";
export declare class AdminBestSalerGravityReportResponse {
    saler_id: number;
    name: string;
    gravity: number;
    constructor(adminBestSalerGravityReportDataModelEntity?: AdminBestSalerGravityReportDataModelEntity);
    mapToList(data: AdminBestSalerGravityReportDataModelEntity[]): AdminBestSalerGravityReportResponse[];
}
