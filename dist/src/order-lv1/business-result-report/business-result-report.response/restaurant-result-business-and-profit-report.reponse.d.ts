import { RestaurantResultBusinessAndProfitReportEntity } from "../business-result-report.entity/restaurant-result-business-and-profit-report.entity";
export declare class RestaurantResultBusinessAndProfitReportResponse {
    id: number;
    restaurant_id: number;
    restaurant_brand_id: number;
    branch_id: number;
    report_time: string;
    total_revenue_amount: number;
    total_cost_amount: number;
    total_profit_amount: number;
    constructor(entity?: RestaurantResultBusinessAndProfitReportEntity);
    mapToList(data: RestaurantResultBusinessAndProfitReportEntity[]): RestaurantResultBusinessAndProfitReportEntity[];
}
