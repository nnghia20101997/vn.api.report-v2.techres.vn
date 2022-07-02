import { Repository } from "typeorm";
import { AdminTopTenProductBestSellerDetailDataModelEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";
export declare class AdminTopTenProductBestSellerDetailService {
    private adminTopTenProductBestSellerDetailDataModelEntity;
    constructor(adminTopTenProductBestSellerDetailDataModelEntity: Repository<AdminTopTenProductBestSellerDetailDataModelEntity>);
    spGRpAdminTopTenProductBestSellerDetail(fromDate: string, toDate: string, _offset: number, _limit: number): Promise<AdminTopTenProductBestSellerDetailDataModelEntity[]>;
}
