"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGravityProductBestSellerResponse = void 0;
class AdminGravityProductBestSellerResponse {
    constructor(adminGravityProductBestSellerDataModelEntity) {
        this.product_id = adminGravityProductBestSellerDataModelEntity
            ? +adminGravityProductBestSellerDataModelEntity.product_id
            : 0;
        this.product_name = adminGravityProductBestSellerDataModelEntity
            ? adminGravityProductBestSellerDataModelEntity.product_name
            : "";
        this.sales_ratio = adminGravityProductBestSellerDataModelEntity
            ? +adminGravityProductBestSellerDataModelEntity.sales_ratio
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminGravityProductBestSellerResponse(e));
        });
        return response;
    }
}
exports.AdminGravityProductBestSellerResponse = AdminGravityProductBestSellerResponse;
//# sourceMappingURL=admin-gravity-product-best-seller.response.js.map