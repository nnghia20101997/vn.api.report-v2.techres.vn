"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTopTenProductBestSellerDetailResponse = void 0;
class AdminTopTenProductBestSellerDetailResponse {
    constructor(adminTopTenProductBestSellerDetailDataModelEntity) {
        this.product_id = adminTopTenProductBestSellerDetailDataModelEntity
            ? +adminTopTenProductBestSellerDetailDataModelEntity.product_id
            : 0;
        this.product_name = adminTopTenProductBestSellerDetailDataModelEntity
            ? adminTopTenProductBestSellerDetailDataModelEntity.product_name
            : "";
        this.total_product = adminTopTenProductBestSellerDetailDataModelEntity
            ? +adminTopTenProductBestSellerDetailDataModelEntity.total_product
            : 0;
        this.total_amount = adminTopTenProductBestSellerDetailDataModelEntity
            ? +adminTopTenProductBestSellerDetailDataModelEntity.total_amount
            : 0;
        this.total_order = adminTopTenProductBestSellerDetailDataModelEntity
            ? +adminTopTenProductBestSellerDetailDataModelEntity.total_order
            : 0;
        this.average_quantity_on_one_order =
            adminTopTenProductBestSellerDetailDataModelEntity
                ? +adminTopTenProductBestSellerDetailDataModelEntity.average_quantity_on_one_order
                : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminTopTenProductBestSellerDetailResponse(e));
        });
        return response;
    }
}
exports.AdminTopTenProductBestSellerDetailResponse = AdminTopTenProductBestSellerDetailResponse;
//# sourceMappingURL=admin-top-ten-product-best-seller-detail-response.js.map