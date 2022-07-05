import { Response } from 'express';
import { RestaurantResultBusinessAndProfitReportQueryDTO } from './business-result-report.dto/restaurant-result-business-and-profit-report.query.dto';
import { RestaurantRevenueCostSummaryReportQueryDTO } from './business-result-report.dto/restaurant-revenue-cost-summary-report.query.dto';
import { BusinessResultReportService } from './business-result-report.service';
export declare class BusinessResultReportController {
    private businessResultReportService;
    constructor(businessResultReportService: BusinessResultReportService);
    getRpRestaurantResultBusinessAndProfit(restaurantResultBusinessAndProfitReportQueryDTO: RestaurantResultBusinessAndProfitReportQueryDTO, res: Response): Promise<any>;
    getRpRestaurantRevenueCostSummary(restaurantRevenueCostSummaryReportQueryDTO: RestaurantRevenueCostSummaryReportQueryDTO, res: Response): Promise<any>;
}
