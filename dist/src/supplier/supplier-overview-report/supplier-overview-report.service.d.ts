import { Repository } from "typeorm";
import { SupplierOverviewReportEntity } from "./supplier-overview-report.entity/supplier-overview-report.entity";
export declare class SupplierOverviewReportService {
    private salePost;
    constructor(salePost: Repository<SupplierOverviewReportEntity>);
    spGRpSupplierOverviewReport(supplierId: number, restaurantId: number, branchId: number, fromDateString: string, toDateString: string): Promise<SupplierOverviewReportEntity>;
}
