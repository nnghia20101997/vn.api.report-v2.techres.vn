"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAccumulatePointsReportResponse = void 0;
class CustomerAccumulatePointsReportResponse {
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
        this.accumulate_point = entity ? +entity.accumulate_point : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new CustomerAccumulatePointsReportResponse(e));
        });
        return response;
    }
}
exports.CustomerAccumulatePointsReportResponse = CustomerAccumulatePointsReportResponse;
//# sourceMappingURL=customer-accumulate-points-report.response.js.map