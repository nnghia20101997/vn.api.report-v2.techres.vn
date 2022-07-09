import { BaseEntity } from 'typeorm';
export declare class SupplierRevenueReportEntity extends BaseEntity {
    report_time: string;
    supplier_revenue: number;
    supplier_cost: number;
    supplier_profit: number;
}
