"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierMaterialPriceChangeHistoriesReportResponse = void 0;
class SupplierMaterialPriceChangeHistoriesReportResponse {
    constructor(entity) {
        this.supplier_id = entity ? +entity.supplier_id : 0;
        this.supplier_name = entity ? entity.supplier_name : "";
        this.supplier_material_id = entity ? +entity.supplier_material_id : 0;
        this.supplier_material_name = entity ? entity.supplier_material_name : "";
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.branch_id = entity ? +entity.branch_id : 0;
        this.total_new_price = entity ? +entity.total_new_price : 0;
        this.total_old_price = entity ? +entity.total_old_price : 0;
        this.total_price_difference = entity ? +entity.total_price_difference : 0;
        this.created_at = entity ? entity.created_at : "";
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            return response.push(new SupplierMaterialPriceChangeHistoriesReportResponse(e));
        });
        return response;
    }
}
exports.SupplierMaterialPriceChangeHistoriesReportResponse = SupplierMaterialPriceChangeHistoriesReportResponse;
//# sourceMappingURL=supplier-material-price-change-histories-report.response.js.map