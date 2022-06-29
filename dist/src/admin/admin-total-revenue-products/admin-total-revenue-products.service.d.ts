import { Repository } from "typeorm";
import { AdminTotalRevenueProductsDataModelEntity } from "./admin-total-revenue-products.entity/admin-total-revenue-products.entity";
export declare class AdminTotalRevenueProductsService {
    private adminTotalRevenueProductsDataModelEntity;
    constructor(adminTotalRevenueProductsDataModelEntity: Repository<AdminTotalRevenueProductsDataModelEntity>);
    spGRpAdminTotalRevenueProducts(fromDate: string, toDate: string): Promise<AdminTotalRevenueProductsDataModelEntity[]>;
}
