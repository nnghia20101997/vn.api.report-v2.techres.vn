import { Response } from 'express';
import { RestaurantEmployeeTargetReportQueryDTO } from './restaurant-employee-target-report.dto/restaurant-employee-target-report.query.dto';
import { RestaurantEmployeeTargetReportService } from './restaurant-employee-target-report.service';
export declare class RestaurantEmployeeTargetReportController {
    private restaurantEmployeeTargetReportService;
    constructor(restaurantEmployeeTargetReportService: RestaurantEmployeeTargetReportService);
    getRpRestaurantEmployeeTarget(restaurantEmployeeTargetReportQueryDTO: RestaurantEmployeeTargetReportQueryDTO, res: Response): Promise<any>;
}
