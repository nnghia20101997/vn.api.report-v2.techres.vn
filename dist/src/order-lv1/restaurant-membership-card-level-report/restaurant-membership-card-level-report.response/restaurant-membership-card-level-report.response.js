"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantMembershipCardLevelReportResponse = void 0;
class RestaurantMembershipCardLevelReportResponse {
    constructor(entity) {
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.membership_card_id = entity ? +entity.membership_card_id : 0;
        this.name = entity ? entity.name : "";
        this.color_hex_code = entity ? entity.color_hex_code : "";
        this.total_customer_member = entity ? +entity.total_customer_member : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new RestaurantMembershipCardLevelReportResponse(e));
        });
        return response;
    }
}
exports.RestaurantMembershipCardLevelReportResponse = RestaurantMembershipCardLevelReportResponse;
//# sourceMappingURL=restaurant-membership-card-level-report.response.js.map