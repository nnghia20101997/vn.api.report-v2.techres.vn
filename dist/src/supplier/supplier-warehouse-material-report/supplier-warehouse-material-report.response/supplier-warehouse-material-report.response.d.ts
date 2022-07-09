import { SupplierWarehouseMaterialReportEntity } from "../supplier-warehouse-material-report.entity/supplier-warehouse-material-report.entity";
export declare class SupplierWarehouseMaterialReportResponse {
    supplier_material_id: number;
    supplier_id: number;
    material_category_id: number;
    material_category_name: string;
    supplier_material_name: string;
    supplier_material_code: string;
    unit_full_name: string;
    total_import: number;
    total_export: number;
    total_return: number;
    quantity_export: number;
    quantity_import: number;
    quantity_return: number;
    quantity_remaining: number;
    total_remaining: number;
    constructor(entity?: SupplierWarehouseMaterialReportEntity);
    mapToList(data: SupplierWarehouseMaterialReportEntity[]): {};
}
