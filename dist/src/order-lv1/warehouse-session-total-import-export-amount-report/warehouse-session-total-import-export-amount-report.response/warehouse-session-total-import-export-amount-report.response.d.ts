import { WarehouseSessionTotalImportExportAmountReportEntity } from "../warehouse-session-total-import-export-amount-report.entity/warehouse-session-total-import-export-amount-report.entity";
export declare class WarehouseSessionTotalImportExportAmountReportResponse {
    id: number;
    restaurant_id: number;
    restaurant_brand_id: number;
    branch_id: number;
    report_time: string;
    import_quantity_amount: number;
    export_quantity_amount: number;
    constructor(entity?: WarehouseSessionTotalImportExportAmountReportEntity);
    mapToList(data: WarehouseSessionTotalImportExportAmountReportEntity[]): WarehouseSessionTotalImportExportAmountReportEntity[];
}
