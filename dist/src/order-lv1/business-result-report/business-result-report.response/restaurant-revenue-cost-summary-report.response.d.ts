import { RestaurantRevenueCostSummaryReportEntity } from "../business-result-report.entity/restaurant-revenue-cost-summary-report.entity";
export declare class RestaurantRevenueCostSummaryReportResponse {
    id: number;
    restaurant_id: number;
    restaurant_brand_id: number;
    branch_id: number;
    report_time: string;
    total_amount: number;
    addition_fee_reason_id: number;
    addition_fee_reason_type_id: number;
    addition_fee_reason_content: string;
    constructor(entity?: RestaurantRevenueCostSummaryReportEntity);
    mapToList(data: RestaurantRevenueCostSummaryReportEntity[]): RestaurantRevenueCostSummaryReportEntity[];
}
