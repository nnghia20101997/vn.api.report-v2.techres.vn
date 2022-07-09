import { BaseEntity } from 'typeorm';
export declare class SupplierOrderListReportEntity extends BaseEntity {
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
}
