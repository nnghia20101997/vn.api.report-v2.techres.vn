import { AdminTotalAllSalerReportDataModelEntity } from "../admin-total-all-saler-report.entity/admin-total-all-saler-report.data.model.entity";
export declare class AdminTotalAllSalerReportResponse {
    number_order: number;
    order_done: number;
    provisional_revenue: number;
    average_value_order: number;
    revenue_cancel: number;
    revenue_done: number;
    rate_single_closing: number;
    constructor(adminTotalAllSalerReportDataModelEntity?: AdminTotalAllSalerReportDataModelEntity);
    mapToList(data: AdminTotalAllSalerReportDataModelEntity[]): {};
}
