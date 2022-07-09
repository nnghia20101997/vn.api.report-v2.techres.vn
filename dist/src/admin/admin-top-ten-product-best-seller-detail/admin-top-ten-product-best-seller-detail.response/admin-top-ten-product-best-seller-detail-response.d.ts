import { AdminTopTenProductBestSellerDetailDataModelEntity } from "../admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";
export declare class AdminTopTenProductBestSellerDetailResponse {
    product_id: number;
    product_name: string;
    total_product: number;
    total_amount: number;
    total_order: number;
    average_quantity_on_one_order: number;
    constructor(adminTopTenProductBestSellerDetailDataModelEntity?: AdminTopTenProductBestSellerDetailDataModelEntity);
    mapToList(data: AdminTopTenProductBestSellerDetailDataModelEntity[]): {};
}
