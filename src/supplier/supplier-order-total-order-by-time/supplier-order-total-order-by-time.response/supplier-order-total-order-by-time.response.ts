import { SupplierOrderTotalOrderByTimeDataModelEntity } from "../supplier-order-total-order-by-time.entity/supplier-order-total-order-by-time.data.model.entity";

export class SupplierOrderTotalOrderByTimeResponse {
  this_week_total_order_amount: number;

  last_week_total_order_amount: number;

  this_month_total_order_amount: number;

  last_month_total_order_amount: number;

  constructor(
    supplierOrderTotalOrderByTimeDataModelEntity?: SupplierOrderTotalOrderByTimeDataModelEntity
  ) {
    this.this_week_total_order_amount =
      supplierOrderTotalOrderByTimeDataModelEntity
        ? +supplierOrderTotalOrderByTimeDataModelEntity.this_week_total_order_amount
        : 0;
    this.last_week_total_order_amount =
      supplierOrderTotalOrderByTimeDataModelEntity
        ? +supplierOrderTotalOrderByTimeDataModelEntity.last_week_total_order_amount
        : 0;
    this.this_month_total_order_amount =
      supplierOrderTotalOrderByTimeDataModelEntity
        ? +supplierOrderTotalOrderByTimeDataModelEntity.this_month_total_order_amount
        : 0;
    this.last_month_total_order_amount =
      supplierOrderTotalOrderByTimeDataModelEntity
        ? +supplierOrderTotalOrderByTimeDataModelEntity.last_month_total_order_amount
        : 0;
  }
}
