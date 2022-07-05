"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseSessionTotalImportExportAmountReportResponse = void 0;
class WarehouseSessionTotalImportExportAmountReportResponse {
    constructor(entity) {
        this.id = entity ? +entity.id : 0;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.branch_id = entity ? +entity.branch_id : 0;
        this.import_quantity_amount = entity ? +entity.import_quantity_amount : 0;
        this.export_quantity_amount = entity ? +entity.export_quantity_amount : 0;
        this.report_time = entity ? entity.report_time : "";
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new WarehouseSessionTotalImportExportAmountReportResponse(e));
        });
        return response;
    }
}
exports.WarehouseSessionTotalImportExportAmountReportResponse = WarehouseSessionTotalImportExportAmountReportResponse;
//# sourceMappingURL=warehouse-session-total-import-export-amount-report.response.js.map