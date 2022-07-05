import { Response } from "express";
import { RestaurantOrderDetailByFoodIdReportQueryDTO } from "./restaurant-order-detail-by-food-id-report.dto/restaurant-order-detail-by-food-id-report.query.dto";
import { RestaurantOrderDetailByFoodIdReportService } from "./restaurant-order-detail-by-food-id-report.service";
export declare class RestaurantOrderDetailByFoodIdReportController {
    private restaurantOrderDetailByFoodIdReportService;
    constructor(restaurantOrderDetailByFoodIdReportService: RestaurantOrderDetailByFoodIdReportService);
    getRpRestaurantOrderDetailByFoodId(restaurantOrderDetailByFoodIdReportQueryDTO: RestaurantOrderDetailByFoodIdReportQueryDTO, res: Response): Promise<any>;
}
