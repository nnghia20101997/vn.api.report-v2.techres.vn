import { AdminSalerDetailReportDataModelEntity } from "../admin-saler-detail-report.entity/admin-saler-detail-report.data.model.entity";
export declare class AdminSalerDetailReportResponse {
    saler_id: number;
    saler_name: string;
    number_order: number;
    order_done: number;
    provisional_revenue: number;
    average_value_order: number;
    revenue_cancel: number;
    revenue_done: number;
    rate_single_closing: number;
    constructor(adminSalerDetailReportDataModelEntity?: AdminSalerDetailReportDataModelEntity);
    mapToList(data: AdminSalerDetailReportDataModelEntity[]): {};
}
