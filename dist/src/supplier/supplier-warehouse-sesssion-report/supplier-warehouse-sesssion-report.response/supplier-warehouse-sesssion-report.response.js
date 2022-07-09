"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWarehouseSesssionReportResponse = void 0;
class SupplierWarehouseSesssionReportResponse {
    constructor(entity) {
        this.total_inventory_first = entity ? +entity.total_inventory_first : 0;
        this.total_import = entity ? +entity.total_import : 0;
        this.total_export = entity ? +entity.total_export : 0;
        this.total_cancel = entity ? +entity.total_cancel : 0;
        this.total_inventory_now = entity ? +entity.total_inventory_now : 0;
        this.total_inventory_first_amount = entity ? +entity.total_inventory_first_amount : 0;
        this.total_import_amount = entity ? +entity.total_import_amount : 0;
        this.total_export_amount = entity ? +entity.total_export_amount : 0;
        this.total_cancel_amount = entity ? +entity.total_cancel_amount : 0;
        this.total_inventory_now_amount = entity ? +entity.total_inventory_now_amount : 0;
    }
}
exports.SupplierWarehouseSesssionReportResponse = SupplierWarehouseSesssionReportResponse;
//# sourceMappingURL=supplier-warehouse-sesssion-report.response.js.map