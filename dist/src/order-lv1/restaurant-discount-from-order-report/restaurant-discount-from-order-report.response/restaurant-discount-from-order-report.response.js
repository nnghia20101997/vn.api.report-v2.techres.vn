"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantDiscountFromOrderReportResponse = void 0;
class RestaurantDiscountFromOrderReportResponse {
    constructor(entity) {
        this.report_time = entity ? entity.report_time : "";
        this.total_amount = entity ? +entity.total_amount : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantDiscountFromOrderReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantDiscountFromOrderReportResponse = RestaurantDiscountFromOrderReportResponse;
//# sourceMappingURL=restaurant-discount-from-order-report.response.js.map