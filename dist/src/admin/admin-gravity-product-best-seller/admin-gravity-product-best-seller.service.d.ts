import { Repository } from "typeorm";
import { AdminGravityProductBestSellerDataModelEntity } from "./admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";
export declare class AdminGravityProductBestSellerService {
    private adminGravityProductBestSellerDataModelEntity;
    constructor(adminGravityProductBestSellerDataModelEntity: Repository<AdminGravityProductBestSellerDataModelEntity>);
    spGRpAdminGravityProductBestSeller(fromDate: string, toDate: string): Promise<AdminGravityProductBestSellerDataModelEntity[]>;
}
