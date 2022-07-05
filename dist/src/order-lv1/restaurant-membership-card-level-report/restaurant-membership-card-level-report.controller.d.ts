import { Response } from 'express';
import { RestaurantMembershipCardLevelReportQueryDTO } from './restaurant-membership-card-level-report.dto/restaurant-membership-card-level-report.query.dto';
import { RestaurantMembershipCardLevelReportService } from './restaurant-membership-card-level-report.service';
export declare class RestaurantMembershipCardLevelReportController {
    private restaurantMembershipCardLevelReportService;
    constructor(restaurantMembershipCardLevelReportService: RestaurantMembershipCardLevelReportService);
    getRpRestaurantMembershipCardLevel(restaurantMembershipCardLevelReportQueryDTO: RestaurantMembershipCardLevelReportQueryDTO, res: Response): Promise<any>;
}
