"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUsePointsReportResponse = void 0;
class CustomerUsePointsReportResponse {
    constructor(entity) {
        this.customer_id = entity ? +entity.customer_id : 0;
        this.nick_name = entity ? entity.nick_name : "";
        this.first_name = entity ? entity.first_name : "";
        this.last_name = entity ? entity.last_name : "";
        this.name = entity ? entity.name : "";
        this.prefix = entity ? entity.prefix : "";
        this.normalize_name = entity ? entity.normalize_name : "";
        this.email = entity ? entity.email : "";
        this.avatar = entity ? entity.avatar : "";
        this.phone = entity ? entity.phone : "";
        this.gender = entity ? +entity.phone : 0;
        this.birthday = entity ? entity.phone : "";
        this.address_full_text = entity ? entity.address_full_text : "";
        this.created_at = entity ? entity.created_at : "";
        this.point = entity ? +entity.point : 0;
        this.accumulate_point = entity ? +entity.accumulate_point : 0;
        this.promotion_point = entity ? +entity.promotion_point : 0;
        this.alo_point = entity ? +entity.alo_point : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new CustomerUsePointsReportResponse(e));
        });
        return response;
    }
}
exports.CustomerUsePointsReportResponse = CustomerUsePointsReportResponse;
//# sourceMappingURL=customer-use-points-report.response.js.map