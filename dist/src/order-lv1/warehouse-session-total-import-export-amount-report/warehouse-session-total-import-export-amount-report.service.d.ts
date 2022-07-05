import { WarehouseSessionTotalImportExportAmountReportEntity } from './warehouse-session-total-import-export-amount-report.entity/warehouse-session-total-import-export-amount-report.entity';
export declare class WarehouseSessionTotalImportExportAmountReportService {
    private restaurantVatReportEntity;
    spGetWarehouseSessionTotalImportExportAmount(restaurantId: number, branchId: number, materialCategoryTypeParentId: number, toDateString: string, groupByType: number): Promise<WarehouseSessionTotalImportExportAmountReportEntity[]>;
}
