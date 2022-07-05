import { RestaurantResultBusinessAndProfitReportEntity } from './business-result-report.entity/restaurant-result-business-and-profit-report.entity';
import { RestaurantRevenueCostSummaryReportEntity } from './business-result-report.entity/restaurant-revenue-cost-summary-report.entity';
export declare class BusinessResultReportService {
    private restaurantVatReportEntity;
    private restaurantRevenueCostSummaryReportEntity;
    spGetRpRestaurantResultBusinessAndProfit(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string, groupByType: number): Promise<RestaurantResultBusinessAndProfitReportEntity[]>;
    spGetRpRestaurantRevenueCostSummary(restaurantId: number, restaurantBrandId: number, branchId: number, additionFeeReasonTypeId: number, fromDateString: string, toDateString: string, groupByType: number): Promise<RestaurantRevenueCostSummaryReportEntity[]>;
}
