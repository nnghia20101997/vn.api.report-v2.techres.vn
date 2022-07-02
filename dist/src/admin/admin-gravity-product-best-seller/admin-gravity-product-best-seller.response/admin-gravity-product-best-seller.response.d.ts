import { AdminGravityProductBestSellerDataModelEntity } from "../admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";
export declare class AdminGravityProductBestSellerResponse {
    product_id: number;
    product_name: string;
    sales_ratio: number;
    constructor(adminGravityProductBestSellerDataModelEntity?: AdminGravityProductBestSellerDataModelEntity);
    mapToList(data: AdminGravityProductBestSellerDataModelEntity[]): AdminGravityProductBestSellerResponse[];
}
