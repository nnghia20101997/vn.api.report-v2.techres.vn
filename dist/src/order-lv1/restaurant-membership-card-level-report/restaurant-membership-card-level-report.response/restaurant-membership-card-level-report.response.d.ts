import { RestaurantMembershipCardLevelReportEntity } from "../restaurant-membership-card-level-report.entity/restaurant-membership-card-level-report.entity";
export declare class RestaurantMembershipCardLevelReportResponse {
    restaurant_id: number;
    membership_card_id: number;
    color_hex_code: string;
    name: string;
    total_customer_member: number;
    constructor(entity?: RestaurantMembershipCardLevelReportEntity);
    mapToList(data: RestaurantMembershipCardLevelReportEntity[]): RestaurantMembershipCardLevelReportEntity[];
}
