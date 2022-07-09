import { SupplierRevenueReportEntity } from "../supplier-revenue-report-by-time.entity/supplier-revenue-report-by-time.entity";
export declare class SupplierRevenueReportByTimeResponse {
    report_time: string;
    supplier_revenue: number;
    supplier_cost: number;
    supplier_profit: number;
    constructor(entity?: SupplierRevenueReportEntity);
    mapToList(data: SupplierRevenueReportEntity[]): {};
}
