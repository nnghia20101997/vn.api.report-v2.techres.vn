import { Response } from "express";
import { AdminTotalRevenueProductsQueryDTO } from "./admin-total-revenue-products.dto/admin-total-revenue-products.query.dto";
import { AdminTotalRevenueProductsService } from "./admin-total-revenue-products.service";
export declare class AdminTotalRevenueProductsController {
    private adminTotalRevenueProductsService;
    constructor(adminTotalRevenueProductsService: AdminTotalRevenueProductsService);
    spGRpAdminAdvertisingRevenue(adminTotalRevenueProductsQueryDTO: AdminTotalRevenueProductsQueryDTO, res: Response): Promise<any>;
}
