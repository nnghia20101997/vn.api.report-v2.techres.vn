import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from "../current-day-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity";
export declare class RestaurantRevenueDetailByRestaurantBrandReportResponse {
    restaurant_id: Number;
    restaurant_brand_id: number;
    restaurant_brand_name: string;
    branch_id: number;
    branch_name: string;
    total_revenue_paid: number;
    total_revenue_in_service: number;
    total_revenue_estimated: number;
    branch_status: number;
    constructor(currentDayModelDataEntity?: RestaurantRevenueDetailByRestaurantBrandReportEntity);
}
