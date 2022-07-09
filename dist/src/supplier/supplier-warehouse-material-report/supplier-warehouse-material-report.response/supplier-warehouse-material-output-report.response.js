"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWarehouseMaterialOutputReportResponse = void 0;
const supplier_warehouse_material_report_response_1 = require("./supplier-warehouse-material-report.response");
class SupplierWarehouseMaterialOutputReportResponse {
    constructor(output, list) {
        this.total_record = output ? +output.total_record : 0;
        this.export_quantity = output ? +output.export_quantity : 0;
        this.import_quantity = output ? +output.import_quantity : 0;
        this.return_quantity = output ? +output.return_quantity : 0;
        this.remaining_quantity = output ? +output.remaining_quantity : 0;
        this.total_import_amount = output ? +output.total_import_amount : 0;
        this.total_export_amount = output ? +output.total_export_amount : 0;
        this.total_return_amount = output ? +output.total_return_amount : 0;
        this.total_remaining_amount = output ? +output.total_remaining_amount : 0;
        this.data = new supplier_warehouse_material_report_response_1.SupplierWarehouseMaterialReportResponse().mapToList(list);
    }
}
exports.SupplierWarehouseMaterialOutputReportResponse = SupplierWarehouseMaterialOutputReportResponse;
//# sourceMappingURL=supplier-warehouse-material-output-report.response.js.map