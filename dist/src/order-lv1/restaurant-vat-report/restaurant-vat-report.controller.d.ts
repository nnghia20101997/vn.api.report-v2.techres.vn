import { Response } from 'express';
import { RestaurantVatReportQueryDTO } from './restaurant-vat-report.dto/restaurant-vat-report.query.dto';
import { RestaurantVatReportService } from './restaurant-vat-report.service';
export declare class RestaurantVatReportController {
    private restaurantVatReportService;
    constructor(restaurantVatReportService: RestaurantVatReportService);
    getRpRestaurantRevenueByBranch(restaurantVatReportQueryDTO: RestaurantVatReportQueryDTO, res: Response): Promise<any>;
}
