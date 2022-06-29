import { AdminTotalRevenueProductsDataModelEntity } from "../admin-total-revenue-products.entity/admin-total-revenue-products.entity";
export declare class AdminTotalRevenueProductsResponse {
    product_id: number;
    product_name: string;
    sales_ratio: number;
    total_product: number;
    total_amount: number;
    constructor(adminTotalRevenueProductsDataModelEntity?: AdminTotalRevenueProductsDataModelEntity);
    mapToList(data: AdminTotalRevenueProductsDataModelEntity[]): AdminTotalRevenueProductsResponse[];
}
