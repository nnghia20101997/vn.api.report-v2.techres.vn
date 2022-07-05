import { RestaurantEmployeeTargetReportEntity } from './restaurant-employee-target-report.entity/restaurant-employee-target-report.entity';
export declare class RestaurantEmployeeTargetReportService {
    private restaurantEmployeeTargetReportEntity;
    spGetRpRestaurantEmployeeTarget(restaurantId: number, restaurantBrandId: number, branchId: number, fromDateString: string, toDateString: string): Promise<RestaurantEmployeeTargetReportEntity[]>;
}
