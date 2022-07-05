"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantInformationInAlolineReportResponse = void 0;
class RestaurantInformationInAlolineReportResponse {
    constructor(entity) {
        this.name = entity ? entity.name : "";
        this.phone = entity ? entity.phone : "";
        this.email = entity ? entity.email : "";
        this.address = entity ? entity.address : "";
        this.logo = entity ? entity.logo : "";
        this.banner = entity ? entity.banner : "";
        this.average_rate = entity ? +entity.average_rate : 0;
        this.rate_count = entity ? +entity.rate_count : 0;
        this.customer_members = entity ? +entity.customer_members : 0;
        this.total_accumulate_point = entity ? +entity.total_accumulate_point : 0;
        this.used_accumulate_point = entity ? +entity.used_accumulate_point : 0;
        this.total_promotion_point = entity ? +entity.total_promotion_point : 0;
        this.used_promotion_point = entity ? +entity.used_promotion_point : 0;
        this.total_alo_point = entity ? +entity.total_alo_point : 0;
        this.total_amount = entity ? +entity.total_amount : 0;
    }
}
exports.RestaurantInformationInAlolineReportResponse = RestaurantInformationInAlolineReportResponse;
//# sourceMappingURL=restaurant-information-in-aloline-report.response.js.map