"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAdvertisingRevenueResponse = void 0;
class AdminAdvertisingRevenueResponse {
    constructor(adminAdvertisingRevenueEntity) {
        this.report_time = adminAdvertisingRevenueEntity
            ? adminAdvertisingRevenueEntity.report_time
            : "";
        this.total_price = adminAdvertisingRevenueEntity
            ? +adminAdvertisingRevenueEntity.total_price
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminAdvertisingRevenueResponse(e));
        });
        return response;
    }
}
exports.AdminAdvertisingRevenueResponse = AdminAdvertisingRevenueResponse;
//# sourceMappingURL=admin-advertising-revenue.response.js.map