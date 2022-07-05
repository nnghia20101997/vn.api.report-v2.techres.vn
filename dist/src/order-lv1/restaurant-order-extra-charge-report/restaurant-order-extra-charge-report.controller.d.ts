import { Response } from 'express';
import { RestaurantOrderExtraChargeReportQueryDTO } from './restaurant-order-extra-charge-report.dto/restaurant-order-extra-charge-report.query.dto';
import { RestaurantOrderExtraChargeReportService } from './restaurant-order-extra-charge-report.service';
export declare class RestaurantOrderExtraChargeReportController {
    private restaurantOrderExtraChargeReportService;
    constructor(restaurantOrderExtraChargeReportService: RestaurantOrderExtraChargeReportService);
    getRpRestaurantRevenueByBranch(restaurantOrderExtraChargeReportQueryDTO: RestaurantOrderExtraChargeReportQueryDTO, res: Response): Promise<any>;
}
