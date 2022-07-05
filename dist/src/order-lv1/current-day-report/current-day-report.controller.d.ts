import { RestaurantRevenueByBranchReportQueryDTO } from './current-day-report.dto/restaurant-revenue-by-branch-report.query.dto';
import { CurrentDayReportService } from './current-day-report.service';
import { Response } from 'express';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO } from './current-day-report.dto/restaurant-revenue-cost-customer-by-restaurant-brand-report.query.dto';
import { RestaurantRevenueDetailByRestaurantBrandReportQueryDTO } from './current-day-report.dto/restaurant-revenue-detail-by-restaurant-b.query.dto';
export declare class CurrentDayReportController {
    private currentDayReportService;
    constructor(currentDayReportService: CurrentDayReportService);
    getRpRestaurantRevenueByBranch(restaurantRevenueByBranchReportQueryDTO: RestaurantRevenueByBranchReportQueryDTO, res: Response): Promise<any>;
    GetRpRestaurantRevenueCostCustomerByRestaurantBrand(restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO: RestaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO, res: Response): Promise<any>;
    getRpRestaurantRevenueDetailByRestaurantBrand(restaurantRevenueDetailByRestaurantBrandReportQueryDTO: RestaurantRevenueDetailByRestaurantBrandReportQueryDTO, res: Response): Promise<any>;
}
