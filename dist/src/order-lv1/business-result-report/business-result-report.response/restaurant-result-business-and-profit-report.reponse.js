"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantResultBusinessAndProfitReportResponse = void 0;
class RestaurantResultBusinessAndProfitReportResponse {
    constructor(entity) {
        this.id = entity ? +entity.id : 0;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.branch_id = entity ? +entity.branch_id : 0;
        this.total_revenue_amount = entity ? +entity.total_revenue_amount : 0;
        this.total_cost_amount = entity ? +entity.total_cost_amount : 0;
        this.total_profit_amount = entity ? +entity.total_profit_amount : 0;
        this.report_time = entity ? entity.report_time : "";
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantResultBusinessAndProfitReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantResultBusinessAndProfitReportResponse = RestaurantResultBusinessAndProfitReportResponse;
//# sourceMappingURL=restaurant-result-business-and-profit-report.reponse.js.map