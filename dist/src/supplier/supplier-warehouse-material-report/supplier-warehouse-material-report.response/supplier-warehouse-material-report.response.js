"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWarehouseMaterialReportResponse = void 0;
class SupplierWarehouseMaterialReportResponse {
    constructor(entity) {
        this.supplier_material_id = entity ? +entity.supplier_material_id : 0;
        this.supplier_id = entity ? +entity.supplier_id : 0;
        this.material_category_id = entity ? +entity.material_category_id : 0;
        this.material_category_name = entity ? entity.material_category_name : "";
        this.supplier_material_name = entity ? entity.supplier_material_name : "";
        this.supplier_material_code = entity ? entity.supplier_material_code : "";
        this.unit_full_name = entity ? entity.unit_full_name : "";
        this.total_import = entity ? +entity.total_import : 0;
        this.total_export = entity ? +entity.total_export : 0;
        this.total_return = entity ? +entity.total_return : 0;
        this.quantity_export = entity ? +entity.quantity_export : 0;
        this.quantity_import = entity ? +entity.quantity_import : 0;
        this.quantity_return = entity ? +entity.quantity_return : 0;
        this.quantity_remaining = entity ? +entity.quantity_remaining : 0;
        this.total_remaining = entity ? +entity.total_remaining : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new SupplierWarehouseMaterialReportResponse(e));
        });
        return response;
    }
}
exports.SupplierWarehouseMaterialReportResponse = SupplierWarehouseMaterialReportResponse;
//# sourceMappingURL=supplier-warehouse-material-report.response.js.map