"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRevenueCostCustomerByRestaurantBrandReportResponse = void 0;
class RestaurantRevenueCostCustomerByRestaurantBrandReportResponse {
    constructor(entity) {
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.branch_id = entity ? +entity.branch_id : 0;
        this.total_revenue_amount_sell = entity ? +entity.total_revenue_amount_sell : 0;
        this.total_revenue_amount_debt = entity ? +entity.total_revenue_amount_debt : 0;
        this.total_revenue_amount_paided = entity ? +entity.total_revenue_amount_paided : 0;
        this.total_revenue_amount_waiting = entity ? +entity.total_revenue_amount_waiting : 0;
        this.total_customer_slot_number_complete = entity ? +entity.total_customer_slot_number_complete : 0;
        this.total_customer_slot_number_not_complete = entity ? +entity.total_customer_slot_number_not_complete : 0;
        this.total_profit_amount_confirm = entity ? +entity.total_profit_amount_confirm : 0;
        this.total_profit_amount_not_confirm = entity ? +entity.total_profit_amount_not_confirm : 0;
        this.total_revenue_amount_deposit = entity ? +entity.total_revenue_amount_deposit : 0;
    }
}
exports.RestaurantRevenueCostCustomerByRestaurantBrandReportResponse = RestaurantRevenueCostCustomerByRestaurantBrandReportResponse;
//# sourceMappingURL=restaurant-revenue-cost-customer-by-restaurant-brand-report.response.js.map