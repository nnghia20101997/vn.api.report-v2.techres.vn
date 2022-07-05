import { Response } from 'express';
import { WarehouseSessionTotalImportExportAmountReportQueryDTO } from './warehouse-session-total-import-export-amount-report.dto/warehouse-session-total-import-export-amount-report.query.dto';
import { WarehouseSessionTotalImportExportAmountReportService } from './warehouse-session-total-import-export-amount-report.service';
export declare class WarehouseSessionTotalImportExportAmountReportController {
    private warehouseSessionTotalImportExportAmountReportService;
    constructor(warehouseSessionTotalImportExportAmountReportService: WarehouseSessionTotalImportExportAmountReportService);
    getWarehouseSessionTotalImportExportAmount(warehouseSessionTotalImportExportAmountReportQueryDTO: WarehouseSessionTotalImportExportAmountReportQueryDTO, res: Response): Promise<any>;
}
