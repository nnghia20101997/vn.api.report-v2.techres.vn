import { SupplierOrderListReportEntity } from "../supplier-order-list-report.entity/supplier-order-list-report.entity";
export declare class SupplierOrderListReportResponse {
    id: number;
    supplier_id: number;
    is_order: number;
    restaurant_id: number;
    restaurant_name: string;
    branch_id: number;
    branch_name: string;
    total_material: number;
    total_vat_amount: number;
    total_discount_amount: number;
    total_amount: number;
    order_status: number;
    delivery_time: string;
    constructor(entity?: SupplierOrderListReportEntity);
    mapToList(data: SupplierOrderListReportEntity[]): {};
}
