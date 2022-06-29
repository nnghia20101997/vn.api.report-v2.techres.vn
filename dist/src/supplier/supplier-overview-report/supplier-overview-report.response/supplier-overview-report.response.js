"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierOverviewReportResponse = void 0;
class SupplierOverviewReportResponse {
    constructor(supplierOverviewReportEntity) {
        this.supplier_id = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.supplier_id
            : 0;
        this.total_order = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.total_order
            : 0;
        this.order_delivered = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.order_delivered
            : 0;
        this.order_not_delivered = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.order_not_delivered
            : 0;
        this.order_processing = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.order_processing
            : 0;
        this.total_order_complete_amount = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.total_order_complete_amount
            : 0;
        this.total_payment_amount = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.total_payment_amount
            : 0;
        this.total_order_amount = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.total_order_amount
            : 0;
        this.debt_amount = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.debt_amount
            : 0;
        this.waiting_confirm = supplierOverviewReportEntity
            ? +supplierOverviewReportEntity.waiting_confirm
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new SupplierOverviewReportResponse(e));
        });
        return response;
    }
}
exports.SupplierOverviewReportResponse = SupplierOverviewReportResponse;
//# sourceMappingURL=supplier-overview-report.response.js.map