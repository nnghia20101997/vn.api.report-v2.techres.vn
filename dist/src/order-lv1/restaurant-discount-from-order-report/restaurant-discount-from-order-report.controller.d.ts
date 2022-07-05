import { Response } from 'express';
import { RestaurantDiscountFromOrderReportQueryDTO } from './restaurant-discount-from-order-report.dto/restaurant-discount-from-order-report.query.dto';
import { RestaurantDiscountFromOrderReportService } from './restaurant-discount-from-order-report.service';
export declare class RestaurantDiscountFromOrderReportController {
    private restaurantDiscountFromOrderReportService;
    constructor(restaurantDiscountFromOrderReportService: RestaurantDiscountFromOrderReportService);
    getRpRestaurantDiscountFromOrder(restaurantDiscountFromOrderReportQueryDTO: RestaurantDiscountFromOrderReportQueryDTO, res: Response): Promise<any>;
}
