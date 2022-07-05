import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { RestaurantOrderDetailByFoodIdReportEntity } from './restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.entity';
export declare class RestaurantOrderDetailByFoodIdReportService {
    private restaurantOrderDetailByFoodIdReportEntity;
    spGetRpRestaurantOrderDetailByFoodId(restaurantId: number, restaurantBrandId: number, branchId: number, employeeId: number, foodId: number, fromDateString: string, toDateString: string, _offset: number, _limit: number): Promise<StoreProcedureOutputResultInterface<RestaurantOrderDetailByFoodIdReportEntity, object>>;
}
