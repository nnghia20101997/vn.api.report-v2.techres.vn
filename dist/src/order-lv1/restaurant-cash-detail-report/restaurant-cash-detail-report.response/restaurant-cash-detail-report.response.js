"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCashDetailReportResponse = void 0;
class RestaurantCashDetailReportResponse {
    constructor(listDataResponse, entityAmount) {
        this.total_amount_receipt = 0;
        this.total_amount_payment = 0;
        this.total_amount = 0;
        this.total_record_receipt = 0;
        this.total_record_payment = 0;
        this.total_record = 0;
        this.listDataReport = listDataResponse;
        this.total_amount_receipt = entityAmount ? +entityAmount.total_amount_receipt : 0;
        this.total_amount_payment = entityAmount ? +entityAmount.total_amount_payment : 0;
        this.total_amount = entityAmount ? +entityAmount.total_amount : 0;
        this.total_record_receipt = entityAmount ? +entityAmount.total_record_receipt : 0;
        this.total_record_payment = entityAmount ? +entityAmount.total_record_payment : 0;
        this.total_record = entityAmount ? +entityAmount.total_record : 0;
    }
}
exports.RestaurantCashDetailReportResponse = RestaurantCashDetailReportResponse;
//# sourceMappingURL=restaurant-cash-detail-report.response.js.map