"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierOrderTotalOrderByTimeResponse = void 0;
class SupplierOrderTotalOrderByTimeResponse {
    constructor(supplierOrderTotalOrderByTimeDataModelEntity) {
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
exports.SupplierOrderTotalOrderByTimeResponse = SupplierOrderTotalOrderByTimeResponse;
//# sourceMappingURL=supplier-order-total-order-by-time.response.js.map