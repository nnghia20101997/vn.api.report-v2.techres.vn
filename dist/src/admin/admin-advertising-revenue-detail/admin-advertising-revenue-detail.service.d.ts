import { Repository } from "typeorm";
import { AdminAdvertisingRevenueDetailDataModelEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";
export declare class AdminAdvertisingRevenueDetailService {
    private adminTopTenProductBestSellerDetailDataModelEntity;
    constructor(adminTopTenProductBestSellerDetailDataModelEntity: Repository<AdminAdvertisingRevenueDetailDataModelEntity>);
    spGRpAdminAdvertisingRevenueDetail(branchId: number, groupByType: number, fromDate: string, toDate: string, _offset: number, _limit: number): Promise<AdminAdvertisingRevenueDetailDataModelEntity[]>;
}
