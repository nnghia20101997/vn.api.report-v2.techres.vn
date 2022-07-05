import { Response } from 'express';
import { RestaurantInformationInAlolineReportQueryDTO } from './restaurant-information-in-aloline-report.dto/restaurant-information-in-aloline-report.query.dto';
import { RestaurantInformationInAlolineReportService } from './restaurant-information-in-aloline-report.service';
export declare class RestaurantInformationInAlolineReportController {
    private restaurantInformationInAlolineReportService;
    constructor(restaurantInformationInAlolineReportService: RestaurantInformationInAlolineReportService);
    getRpRestaurantInformationInAloline(restaurantInformationInAlolineReportQueryDTO: RestaurantInformationInAlolineReportQueryDTO, res: Response): Promise<any>;
}
