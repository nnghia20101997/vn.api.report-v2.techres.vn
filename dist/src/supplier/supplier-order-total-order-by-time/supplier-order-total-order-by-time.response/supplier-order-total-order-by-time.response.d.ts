import { SupplierOrderTotalOrderByTimeDataModelEntity } from "../supplier-order-total-order-by-time.entity/supplier-order-total-order-by-time.data.model.entity";
export declare class SupplierOrderTotalOrderByTimeResponse {
    this_week_total_order_amount: number;
    last_week_total_order_amount: number;
    this_month_total_order_amount: number;
    last_month_total_order_amount: number;
    constructor(supplierOrderTotalOrderByTimeDataModelEntity?: SupplierOrderTotalOrderByTimeDataModelEntity);
}
