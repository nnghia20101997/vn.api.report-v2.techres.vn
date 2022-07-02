import { Response } from "express";
import { AdminAdvertisingRevenueQueryDTO } from "./admin-advertising-revenue.dto/admin-advertising-revenue.query.dto";
import { AdminAdvertisingRevenueService } from "./admin-advertising-revenue.service";
export declare class AdminAdvertisingRevenueController {
    private adminAdvertisingRevenueService;
    constructor(adminAdvertisingRevenueService: AdminAdvertisingRevenueService);
    spGRpAdminAdvertisingRevenue(adminAdvertisingRevenueQueryDTO: AdminAdvertisingRevenueQueryDTO, res: Response): Promise<any>;
}
