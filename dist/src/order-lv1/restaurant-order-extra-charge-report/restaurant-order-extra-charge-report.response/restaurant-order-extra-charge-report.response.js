"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantOrderExtraChargeReportResponse = void 0;
class RestaurantOrderExtraChargeReportResponse {
    constructor(entity) {
        this.report_time = entity ? entity.report_time : "";
        this.timestamp = entity ? entity.timestamp : "";
        this.total_amount = entity ? +entity.total_amount : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantOrderExtraChargeReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantOrderExtraChargeReportResponse = RestaurantOrderExtraChargeReportResponse;
//# sourceMappingURL=restaurant-order-extra-charge-report.response.js.map