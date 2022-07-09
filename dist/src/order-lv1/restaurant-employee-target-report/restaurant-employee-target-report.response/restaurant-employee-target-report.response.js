"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantEmployeeTargetReportResponse = void 0;
class RestaurantEmployeeTargetReportResponse {
    constructor(entity) {
        this.employee_id = entity ? +entity.employee_id : 0;
        this.full_name = entity ? entity.full_name : "";
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0;
        this.restaurant_brand_name = entity ? entity.restaurant_brand_name : "";
        this.branch_id = entity ? +entity.branch_id : 0;
        this.branch_name = entity ? entity.branch_name : "";
        this.employee_role_name = entity ? entity.employee_role_name : "";
        this.total_revenue_reality = entity ? +entity.total_revenue_reality : 0;
        this.total_revenue_target = entity ? +entity.total_revenue_target : 0;
        this.ratio = entity ? +entity.ratio : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantEmployeeTargetReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantEmployeeTargetReportResponse = RestaurantEmployeeTargetReportResponse;
//# sourceMappingURL=restaurant-employee-target-report.response.js.map