import { Response } from "express";
import { AdminCustomerAlolineReportService } from './admin-customer-aloline-report.service';
export declare class AdminCustomerAlolineReportController {
    private adminCustomerAlolineReportService;
    constructor(adminCustomerAlolineReportService: AdminCustomerAlolineReportService);
    spGRpAdminCustomerAlolineReport(res: Response): Promise<any>;
}
