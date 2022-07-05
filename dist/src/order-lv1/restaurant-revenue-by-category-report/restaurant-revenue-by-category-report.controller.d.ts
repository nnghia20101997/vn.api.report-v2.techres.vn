import { Response } from 'express';
import { RestaurantRevenueByCategoryReportQueryDTO } from './restaurant-revenue-by-category-report.dto/restaurant-revenue-by-category-report.query.dto';
import { RestaurantRevenueByCategoryReportService } from './restaurant-revenue-by-category-report.service';
export declare class RestaurantRevenueByCategoryReportController {
    private restaurantRevenueByCategoryReportService;
    constructor(restaurantRevenueByCategoryReportService: RestaurantRevenueByCategoryReportService);
    getRpRestaurantRevenueByCategory(restaurantRevenueByCategoryReportQueryDTO: RestaurantRevenueByCategoryReportQueryDTO, res: Response): Promise<any>;
}
