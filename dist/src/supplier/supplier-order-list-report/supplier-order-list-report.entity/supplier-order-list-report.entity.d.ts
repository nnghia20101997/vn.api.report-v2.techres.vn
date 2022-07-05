import { BaseEntity } from 'typeorm';
export declare class SupplierOrderListReportEntity extends BaseEntity {
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
}
