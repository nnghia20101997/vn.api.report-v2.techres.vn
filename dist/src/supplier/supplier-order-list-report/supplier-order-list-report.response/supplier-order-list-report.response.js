"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierOrderListReportResponse = void 0;
class SupplierOrderListReportResponse {
    constructor(entity) {
        this.id = entity ? +entity.id : 0;
        this.supplier_id = entity ? +entity.supplier_id : 0;
        this.is_order = entity ? +entity.is_order : 0;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_name = entity ? entity.restaurant_name : "";
        this.branch_id = entity ? +entity.branch_id : 0;
        this.branch_name = entity ? entity.branch_name : "";
        this.total_material = entity ? +entity.total_material : 0;
        this.total_vat_amount = entity ? +entity.total_vat_amount : 0;
        this.total_discount_amount = entity ? +entity.total_discount_amount : 0;
        this.total_amount = entity ? +entity.total_amount : 0;
        this.order_status = entity ? +entity.order_status : 0;
        this.delivery_time = entity ? entity.delivery_time : "";
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new SupplierOrderListReportResponse(e));
        });
        return response;
    }
}
exports.SupplierOrderListReportResponse = SupplierOrderListReportResponse;
//# sourceMappingURL=supplier-order-list-report.response.js.map