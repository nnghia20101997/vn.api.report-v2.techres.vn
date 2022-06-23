import { Response } from "express";
import { SupplierOverviewReportService } from "./supplier-overview-report.service";
import { SupplierOverviewReportQueryDto } from "./supplier_overview-report.dto/supplier_overview-report.query.dto";
export declare class SupplierOverviewReportController {
    private supplierOverviewReportService;
    constructor(supplierOverviewReportService: SupplierOverviewReportService);
    spGRpSupplierOverviewReport(supplierOverviewReportQueryDto: SupplierOverviewReportQueryDto, res: Response): Promise<any>;
}
