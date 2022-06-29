"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAdvertisingRevenueDetailResponse = void 0;
class AdminAdvertisingRevenueDetailResponse {
    constructor(adminAdvertisingRevenueDetailDataModelEntity) {
        this.total_price = adminAdvertisingRevenueDetailDataModelEntity
            ? +adminAdvertisingRevenueDetailDataModelEntity.total_price
            : 0;
        this.report_time = adminAdvertisingRevenueDetailDataModelEntity
            ? adminAdvertisingRevenueDetailDataModelEntity.report_time
            : "";
        this.media_length_by_second = adminAdvertisingRevenueDetailDataModelEntity
            ? +adminAdvertisingRevenueDetailDataModelEntity.media_length_by_second
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminAdvertisingRevenueDetailResponse(e));
        });
        return response;
    }
}
exports.AdminAdvertisingRevenueDetailResponse = AdminAdvertisingRevenueDetailResponse;
//# sourceMappingURL=admin-advertising-revenue-detail.response.js.map