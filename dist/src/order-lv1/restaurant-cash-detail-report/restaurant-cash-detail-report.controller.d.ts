import { Response } from "express";
import { RestaurantCashDetailReportQueryDTO } from "./restaurant-cash-detail-report.dto/restaurant-cash-detail-report.query.dto";
import { RestaurantCashDetailReportService } from './restaurant-cash-detail-report.service';
export declare class RestaurantCashDetailReportController {
    private restaurantCashDetailReportService;
    constructor(restaurantCashDetailReportService: RestaurantCashDetailReportService);
    getRpRestaurantCashDetail(restaurantCashDetailReportQueryDTO: RestaurantCashDetailReportQueryDTO, res: Response): Promise<any>;
}
