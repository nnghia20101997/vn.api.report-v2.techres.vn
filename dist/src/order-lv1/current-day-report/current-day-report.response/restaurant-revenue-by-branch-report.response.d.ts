import { RestaurantRevenueByBranchReportEntity } from "../current-day-report.entity/restaurant-revenue-by-branch-report.entity";
export declare class RestaurantRevenueByBranchReportResponse {
    restaurant_brand_id: number;
    restaurant_brand_name: string;
    branch_id: number;
    branch_name: string;
    total_revenue_paid: number;
    total_revenue_in_service: number;
    total_revenue_estimated: number;
    branch_status: number;
    constructor(currentDayModelDataEntity?: RestaurantRevenueByBranchReportEntity);
    mapToList(data: RestaurantRevenueByBranchReportEntity[]): RestaurantRevenueByBranchReportResponse[];
}
