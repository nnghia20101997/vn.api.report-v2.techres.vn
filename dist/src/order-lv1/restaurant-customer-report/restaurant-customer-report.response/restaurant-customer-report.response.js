"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCustomerReportResponse = void 0;
class RestaurantCustomerReportResponse {
    constructor(listDataResponse, entityOutput) {
        this.total_customer_go_to_restaurant = 0;
        this.total_customer_register = 0;
        this.total_customer_save_point = 0;
        this.total_customer_use_point = 0;
        this.total_customer_receiving_gifts = 0;
        this.total_orders = 0;
        this.listDataReport = listDataResponse;
        this.total_customer_go_to_restaurant = entityOutput ? +entityOutput.total_customer_go_to_restaurant : 0;
        this.total_customer_register = entityOutput ? +entityOutput.total_customer_register : 0;
        this.total_customer_save_point = entityOutput ? +entityOutput.total_customer_save_point : 0;
        this.total_customer_use_point = entityOutput ? +entityOutput.total_customer_use_point : 0;
        this.total_customer_receiving_gifts = entityOutput ? +entityOutput.total_customer_receiving_gifts : 0;
        this.total_orders = entityOutput ? +entityOutput.total_orders : 0;
    }
}
exports.RestaurantCustomerReportResponse = RestaurantCustomerReportResponse;
//# sourceMappingURL=restaurant-customer-report.response.js.map