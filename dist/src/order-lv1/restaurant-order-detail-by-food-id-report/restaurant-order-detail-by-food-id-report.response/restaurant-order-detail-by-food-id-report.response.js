"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantOrderDetailByFoodIdReportResponse = void 0;
class RestaurantOrderDetailByFoodIdReportResponse {
    constructor(list_data, entity) {
        this.total_record = entity ? +entity.total_record : 0;
        this.list_data = list_data;
    }
}
exports.RestaurantOrderDetailByFoodIdReportResponse = RestaurantOrderDetailByFoodIdReportResponse;
//# sourceMappingURL=restaurant-order-detail-by-food-id-report.response.js.map