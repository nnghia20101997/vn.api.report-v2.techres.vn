import { RestaurantDiscountFromOrderReportEntity } from './restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity';
export declare class RestaurantDiscountFromOrderReportService {
    private restaurantDiscountFromOrderReportEntity;
    spGetRpRestaurantDiscountFromOrder(restaurantId: number, restaurantBrandId: number, branchId: number, groupByType: number, fromDateString: string, toDateString: string): Promise<RestaurantDiscountFromOrderReportEntity[]>;
}
