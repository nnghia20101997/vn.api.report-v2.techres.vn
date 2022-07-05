"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRevenueCostSummaryReportResponse = void 0;
class RestaurantRevenueCostSummaryReportResponse {
    constructor(entity) {
        this.id = entity ? +entity.id : 0;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.branch_id = entity ? +entity.branch_id : 0;
        this.addition_fee_reason_id = entity ? +entity.addition_fee_reason_id : 0;
        this.addition_fee_reason_type_id = entity ? +entity.addition_fee_reason_type_id : 0;
        this.addition_fee_reason_content = entity ? entity.addition_fee_reason_content : "";
        this.total_amount = entity ? +entity.total_amount : 0;
        this.report_time = entity ? entity.report_time : "";
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantRevenueCostSummaryReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantRevenueCostSummaryReportResponse = RestaurantRevenueCostSummaryReportResponse;
//# sourceMappingURL=restaurant-revenue-cost-summary-report.response.js.map