import { RestaurantOrderExtraChargeReportEntity } from './restaurant-order-extra-charge-report.entity/restaurant-order-extra-charge-report.entity';
export declare class RestaurantOrderExtraChargeReportService {
    private restaurantOrderExtraChargeReportEntity;
    spGetRpRestaurantVat(restaurantId: number, restaurantBrandId: number, branchId: number, groupByType: number, fromDateString: string, toDateString: string): Promise<RestaurantOrderExtraChargeReportEntity[]>;
}
