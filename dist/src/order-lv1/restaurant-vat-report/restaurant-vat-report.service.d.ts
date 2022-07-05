import { RestaurantVatReportEntity } from './restaurant-vat-report.entity/restaurant-vat-report.entity';
export declare class RestaurantVatReportService {
    private restaurantVatReportEntity;
    spGetRpRestaurantVat(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string, groupByType: number): Promise<RestaurantVatReportEntity[]>;
}
