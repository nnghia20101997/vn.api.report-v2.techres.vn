import { RestaurantMembershipCardLevelReportEntity } from './restaurant-membership-card-level-report.entity/restaurant-membership-card-level-report.entity';
export declare class RestaurantMembershipCardLevelReportService {
    private restaurantMembershipCardLevelReportEntity;
    spGetRpRestaurantMembershipCardLevel(restaurantId: number): Promise<RestaurantMembershipCardLevelReportEntity[]>;
}
