import { Repository } from "typeorm";
import { AdminCustomerAlolineReportEntity } from "./admin-customer-aloline-report.entity/admin-customer-aloline-report.entity";
export declare class AdminCustomerAlolineReportService {
    private adminCustomerAlolineReportEntity;
    constructor(adminCustomerAlolineReportEntity: Repository<AdminCustomerAlolineReportEntity>);
    spGRpAdminCustomerAlolineReport(): Promise<AdminCustomerAlolineReportEntity>;
}
