import { SupplierWarehouseSesssionReportEntity } from "../supplier-warehouse-sesssion-report.entity/supplier-warehouse-sesssion-report.entity";
export declare class SupplierWarehouseSesssionReportResponse {
    total_inventory_first: number;
    total_import: number;
    total_export: number;
    total_cancel: number;
    total_inventory_now: number;
    total_inventory_first_amount: number;
    total_import_amount: number;
    total_export_amount: number;
    total_cancel_amount: number;
    total_inventory_now_amount: number;
    constructor(entity?: SupplierWarehouseSesssionReportEntity);
}
