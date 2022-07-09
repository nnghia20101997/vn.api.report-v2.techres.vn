"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTotalRevenueProductsResponse = void 0;
class AdminTotalRevenueProductsResponse {
    constructor(adminTotalRevenueProductsDataModelEntity) {
        this.product_id = adminTotalRevenueProductsDataModelEntity
            ? +adminTotalRevenueProductsDataModelEntity.product_id
            : 0;
        this.product_name = adminTotalRevenueProductsDataModelEntity
            ? adminTotalRevenueProductsDataModelEntity.product_name
            : "";
        this.sales_ratio = adminTotalRevenueProductsDataModelEntity
            ? +adminTotalRevenueProductsDataModelEntity.sales_ratio
            : 0;
        this.total_product = adminTotalRevenueProductsDataModelEntity
            ? +adminTotalRevenueProductsDataModelEntity.total_product
            : 0;
        this.total_amount = adminTotalRevenueProductsDataModelEntity
            ? +adminTotalRevenueProductsDataModelEntity.total_amount
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminTotalRevenueProductsResponse(e));
        });
        return response;
    }
}
exports.AdminTotalRevenueProductsResponse = AdminTotalRevenueProductsResponse;
//# sourceMappingURL=admin-total-revenue-products.response.js.map