import { SupplierOverviewReportEntity } from "../supplier-overview-report.entity/supplier-overview-report.entity";
export declare class SupplierOverviewReportResponse {
    supplier_id: number;
    total_order: number;
    order_delivered: number;
    order_not_delivered: number;
    order_processing: number;
    order_return: number;
    total_order_complete_amount: number;
    total_payment_amount: number;
    total_order_amount: number;
    debt_amount: number;
    waiting_confirm: number;
    constructor(supplierOverviewReportEntity?: SupplierOverviewReportEntity);
    mapToList(data: SupplierOverviewReportEntity[]): {};
}
