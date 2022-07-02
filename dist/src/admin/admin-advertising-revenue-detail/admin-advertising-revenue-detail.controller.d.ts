import { Response } from "express";
import { AdminAdvertisingRevenueDetailQueryDTO } from "./admin-advertising-revenue-detail.dto/admin-advertising-revenue-detail.query.dto";
import { AdminAdvertisingRevenueDetailService } from "./admin-advertising-revenue-detail.service";
export declare class AdminAdvertisingRevenueDetailController {
    private adminAdvertisingRevenueDetailService;
    constructor(adminAdvertisingRevenueDetailService: AdminAdvertisingRevenueDetailService);
    spGRpAdminAdvertisingRevenue(adminAdvertisingRevenueDetailQueryDTO: AdminAdvertisingRevenueDetailQueryDTO, res: Response): Promise<any>;
}
