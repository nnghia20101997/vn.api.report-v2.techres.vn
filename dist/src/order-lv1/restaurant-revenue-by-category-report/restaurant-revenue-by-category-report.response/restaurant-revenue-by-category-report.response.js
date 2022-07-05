"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRevenueByCategoryReportResponse = void 0;
class RestaurantRevenueByCategoryReportResponse {
    constructor(entity) {
        this.category_id = entity ? +entity.category_id : 0;
        this.category_name = entity ? entity.category_name : "";
        this.total_amount = entity ? +entity.total_amount : 0;
        this.total_original_amount = entity ? +entity.total_original_amount : 0;
        this.profit = entity ? +entity.profit : 0;
        this.profit_ratio = entity ? +entity.profit_ratio : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantRevenueByCategoryReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantRevenueByCategoryReportResponse = RestaurantRevenueByCategoryReportResponse;
//# sourceMappingURL=restaurant-revenue-by-category-report.response.js.map