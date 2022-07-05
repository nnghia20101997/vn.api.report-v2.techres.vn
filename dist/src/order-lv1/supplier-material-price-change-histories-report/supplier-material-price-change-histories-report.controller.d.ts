import { Response } from 'express';
import { SupplierMaterialPriceChangeHistoriesReportQueryDTO } from './supplier-material-price-change-histories-report.dto/supplier-material-price-change-histories-report.query.dto';
import { SupplierMaterialPriceChangeHistoriesReportService } from './supplier-material-price-change-histories-report.service';
export declare class SupplierMaterialPriceChangeHistoriesReportController {
    private supplierMaterialPriceChangeHistoriesReportService;
    constructor(supplierMaterialPriceChangeHistoriesReportService: SupplierMaterialPriceChangeHistoriesReportService);
    getWarehouseSessionTotalImportExportAmount(supplierMaterialPriceChangeHistoriesReportQueryDTO: SupplierMaterialPriceChangeHistoriesReportQueryDTO, res: Response): Promise<any>;
}
