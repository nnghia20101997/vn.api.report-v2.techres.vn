import { Repository } from "typeorm";
import { AdminAdvertisingRevenueEntity } from "./admin-advertising-revenue.entity/admin-advertising-revenue.entity";
export declare class AdminAdvertisingRevenueService {
    private adminAdvertisingRevenueEntity;
    constructor(adminAdvertisingRevenueEntity: Repository<AdminAdvertisingRevenueEntity>);
    spGRpAdminAdvertisingRevenue(fromDate: string, toDate: string, report_Type: number): Promise<AdminAdvertisingRevenueEntity[]>;
}
