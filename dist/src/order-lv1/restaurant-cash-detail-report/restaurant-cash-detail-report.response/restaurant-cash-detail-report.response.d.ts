import { RestaurantCashDetailReportEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity";
import { RestaurantCashDetailReportOutputEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.output.entity";
export declare class RestaurantCashDetailReportResponse {
    list_data_report: RestaurantCashDetailReportEntity[];
    total_amount_receipt: number;
    total_amount_payment: number;
    total_amount: number;
    total_record_receipt: number;
    total_record_payment: number;
    total_record: number;
    constructor(list_data_report?: RestaurantCashDetailReportEntity[], entity_amount?: RestaurantCashDetailReportOutputEntity);
}
