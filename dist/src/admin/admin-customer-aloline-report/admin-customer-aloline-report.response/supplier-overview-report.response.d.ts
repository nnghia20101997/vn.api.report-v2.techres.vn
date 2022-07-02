import { AdminCustomerAlolineReportEntity } from "../admin-customer-aloline-report.entity/admin-customer-aloline-report.entity";
export declare class AdminCustomerAlolineReportResponse {
    total_customers: number;
    total_active: number;
    total_unactive: number;
    constructor(adminCustomerAlolineReportEntity?: AdminCustomerAlolineReportEntity);
    mapToList(data: AdminCustomerAlolineReportEntity[]): AdminCustomerAlolineReportResponse[];
}
