import { SupplierMaterialPriceChangeHistoriesReportEntity } from './supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity';
export declare class SupplierMaterialPriceChangeHistoriesReportService {
    private supplierMaterialPriceChangeHistoriesReportEntity;
    spRpSupplierMaterialPriceChangeHistories(restaurantId: number, restaurantBrandId: number, branchId: number, supplierId: number, fromDate: string, toDate: string, supplierMaterialId: number, reportType: number): Promise<SupplierMaterialPriceChangeHistoriesReportEntity[]>;
}
