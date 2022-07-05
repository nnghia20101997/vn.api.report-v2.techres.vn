"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantVatReportResponse = void 0;
class RestaurantVatReportResponse {
    constructor(entity) {
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.branch_id = entity ? +entity.branch_id : 0;
        this.amount = entity ? +entity.amount : 0;
        this.report_time = entity ? entity.report_time : "";
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantVatReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantVatReportResponse = RestaurantVatReportResponse;
//# sourceMappingURL=restaurant-vat-report.response.js.map