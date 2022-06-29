import { Response } from "express";
import { AdminGravityProductBestSellerQueryDTO } from "./admin-gravity-product-best-seller.dto/admin-gravity-product-best-seller.query.dto";
import { AdminGravityProductBestSellerService } from "./admin-gravity-product-best-seller.service";
export declare class AdminGravityProductBestSellerController {
    private adminGravityProductBestSellerService;
    constructor(adminGravityProductBestSellerService: AdminGravityProductBestSellerService);
    spGRpAdminAdvertisingRevenue(adminGravityProductBestSellerQueryDTO: AdminGravityProductBestSellerQueryDTO, res: Response): Promise<any>;
}
