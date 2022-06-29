import { Response } from "express";
import { AdminTopTenProductBestSellerDetailQueryDTO } from "./admin-top-ten-product-best-seller-detail.dto/admin-top-ten-product-best-seller-detail.query.dto";
import { AdminTopTenProductBestSellerDetailService } from "./admin-top-ten-product-best-seller-detail.service";
export declare class AdminTopTenProductBestSellerDetailController {
    private adminTopTenProductBestSellerDetailService;
    constructor(adminTopTenProductBestSellerDetailService: AdminTopTenProductBestSellerDetailService);
    spGRpAdminAdvertisingRevenue(adminTopTenProductBestSellerDetailQueryDTO: AdminTopTenProductBestSellerDetailQueryDTO, res: Response): Promise<any>;
}
