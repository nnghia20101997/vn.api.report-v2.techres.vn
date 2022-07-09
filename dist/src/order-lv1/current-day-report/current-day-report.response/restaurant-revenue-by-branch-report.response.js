"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRevenueByBranchReportResponse = void 0;
class RestaurantRevenueByBranchReportResponse {
    constructor(currentDayModelDataEntity) {
        this.branch_id = currentDayModelDataEntity ? +currentDayModelDataEntity.branch_id : 0;
        this.branch_name = currentDayModelDataEntity ? currentDayModelDataEntity.branch_name : "";
        this.restaurant_brand_id = currentDayModelDataEntity ? +currentDayModelDataEntity.restaurant_brand_id : 0;
        this.restaurant_brand_name = currentDayModelDataEntity ? currentDayModelDataEntity.restaurant_brand_name : "";
        this.branch_status = currentDayModelDataEntity ? +currentDayModelDataEntity.branch_status : 0;
        this.total_revenue_paid = currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_paid : 0;
        this.total_revenue_in_service = currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_in_service : 0;
        this.total_revenue_estimated = currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_estimated : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantRevenueByBranchReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantRevenueByBranchReportResponse = RestaurantRevenueByBranchReportResponse;
//# sourceMappingURL=restaurant-revenue-by-branch-report.response.js.map