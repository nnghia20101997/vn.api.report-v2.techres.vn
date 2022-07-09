import { RestaurantCashDetailReportEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity";
import { RestaurantCashDetailReportOutputEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.output.entity";
export declare class RestaurantCashDetailReportResponse {
    listDataReport: RestaurantCashDetailReportEntity[];
    total_amount_receipt: number;
    total_amount_payment: number;
    total_amount: number;
    total_record_receipt: number;
    total_record_payment: number;
    total_record: number;
    constructor(listDataResponse?: RestaurantCashDetailReportEntity[], entityAmount?: RestaurantCashDetailReportOutputEntity);
}
