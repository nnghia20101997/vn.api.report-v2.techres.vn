import { RestaurantRevenueByCategoryReportEntity } from './restaurant-revenue-by-category-report.entity/restaurant-revenue-by-category-report.entity';
export declare class RestaurantRevenueByCategoryReportService {
    private restaurantRevenueByCategoryReportEntity;
    spGetRpRestaurantRevenueByCategory(restaurantId: number, restaurantBrandId: number, branchId: number, categoryType: number, fromDateString: string, toDateString: string): Promise<RestaurantRevenueByCategoryReportEntity[]>;
}
