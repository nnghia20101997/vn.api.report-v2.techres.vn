import { RestaurantRevenueByBranchReportEntity } from './current-day-report.entity/restaurant-revenue-by-branch-report.entity';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity';
import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity';
export declare class CurrentDayReportService {
    private restaurantRevenueByBranchReportEntity;
    private restaurantRevenueCostCustomerByRestaurantBrandReportEntity;
    private restaurantRevenueDetailByRestaurantBrandReportEntity;
    spGetRpRestaurantRevenueByBranch(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string): Promise<RestaurantRevenueByBranchReportEntity[]>;
    spGetRpRestaurantRevenueCostCustomerByRestaurantBrand(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string): Promise<RestaurantRevenueCostCustomerByRestaurantBrandReportEntity>;
    spGetRpRestaurantRevenueDetailByRestaurantBrand(restaurantId: number, restaurantBrandId: number, fromDateString: string, toDateString: string): Promise<RestaurantRevenueDetailByRestaurantBrandReportEntity>;
}
