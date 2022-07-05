"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCashDetailReportResponse = void 0;
class RestaurantCashDetailReportResponse {
    constructor(list_data_report, entity_amount) {
        this.total_amount_receipt = 0;
        this.total_amount_payment = 0;
        this.total_amount = 0;
        this.total_record_receipt = 0;
        this.total_record_payment = 0;
        this.total_record = 0;
        this.list_data_report = list_data_report;
        this.total_amount_receipt = entity_amount ? +entity_amount.total_amount_receipt : 0;
        this.total_amount_payment = entity_amount ? +entity_amount.total_amount_payment : 0;
        this.total_amount = entity_amount ? +entity_amount.total_amount : 0;
        this.total_record_receipt = entity_amount ? +entity_amount.total_record_receipt : 0;
        this.total_record_payment = entity_amount ? +entity_amount.total_record_payment : 0;
        this.total_record = entity_amount ? +entity_amount.total_record : 0;
    }
}
exports.RestaurantCashDetailReportResponse = RestaurantCashDetailReportResponse;
//# sourceMappingURL=restaurant-cash-detail-report.response.js.map