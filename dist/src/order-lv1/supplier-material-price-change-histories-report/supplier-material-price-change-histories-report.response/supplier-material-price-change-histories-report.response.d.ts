import { SupplierMaterialPriceChangeHistoriesReportEntity } from "../supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity";
export declare class SupplierMaterialPriceChangeHistoriesReportResponse {
    id: number;
    supplier_id: number;
    supplier_name: string;
    supplier_material_id: number;
    supplier_material_name: string;
    restaurant_id: number;
    restaurant_brand_id: number;
    branch_id: number;
    total_new_price: number;
    total_old_price: number;
    total_price_difference: number;
    created_at: string;
    constructor(entity?: SupplierMaterialPriceChangeHistoriesReportEntity);
    mapToList(data: SupplierMaterialPriceChangeHistoriesReportEntity[]): SupplierMaterialPriceChangeHistoriesReportEntity[];
}
