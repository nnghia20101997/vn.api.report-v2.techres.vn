import { RestaurantOrderDetailByFoodIdReportEntity } from "../restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.entity";
import { RestaurantOrderDetailByFoodIdReportOutputEntity } from "../restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.output.entity";
export declare class RestaurantOrderDetailByFoodIdReportResponse {
    list_data: RestaurantOrderDetailByFoodIdReportEntity[];
    total_record: number;
    constructor(list_data?: RestaurantOrderDetailByFoodIdReportEntity[], entity?: RestaurantOrderDetailByFoodIdReportOutputEntity);
}
