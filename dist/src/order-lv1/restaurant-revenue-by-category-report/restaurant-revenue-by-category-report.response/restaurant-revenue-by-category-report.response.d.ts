import { RestaurantRevenueByCategoryReportEntity } from "../restaurant-revenue-by-category-report.entity/restaurant-revenue-by-category-report.entity";
export declare class RestaurantRevenueByCategoryReportResponse {
    category_id: number;
    category_name: string;
    total_amount: number;
    total_original_amount: number;
    profit: number;
    profit_ratio: number;
    constructor(entity?: RestaurantRevenueByCategoryReportEntity);
    mapToList(data: RestaurantRevenueByCategoryReportEntity[]): RestaurantRevenueByCategoryReportEntity[];
}
