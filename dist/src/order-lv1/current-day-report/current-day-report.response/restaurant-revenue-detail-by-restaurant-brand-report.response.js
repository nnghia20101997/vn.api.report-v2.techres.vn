"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRevenueDetailByRestaurantBrandReportResponse = void 0;
class RestaurantRevenueDetailByRestaurantBrandReportResponse {
    constructor(currentDayModelDataEntity) {
        this.restaurant_id = currentDayModelDataEntity ? +currentDayModelDataEntity.restaurant_id : 0;
        this.restaurant_brand_id = currentDayModelDataEntity ? +currentDayModelDataEntity.restaurant_brand_id : 0;
        this.restaurant_brand_name = currentDayModelDataEntity ? currentDayModelDataEntity.restaurant_brand_name : "";
        this.branch_id = currentDayModelDataEntity ? +currentDayModelDataEntity.branch_id : 0;
        this.branch_name = currentDayModelDataEntity ? currentDayModelDataEntity.branch_name : "";
        this.total_revenue_paid = currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_paid : 0;
        this.total_revenue_in_service = currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_in_service : 0;
        this.total_revenue_estimated = currentDayModelDataEntity ? +currentDayModelDataEntity.total_revenue_estimated : 0;
    }
}
exports.RestaurantRevenueDetailByRestaurantBrandReportResponse = RestaurantRevenueDetailByRestaurantBrandReportResponse;
//# sourceMappingURL=restaurant-revenue-detail-by-restaurant-brand-report.response.js.map