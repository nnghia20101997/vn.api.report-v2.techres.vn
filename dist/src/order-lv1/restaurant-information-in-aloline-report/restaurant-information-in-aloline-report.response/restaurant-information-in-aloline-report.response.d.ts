import { RestaurantInformationInAlolineReportEntity } from "../restaurant-information-in-aloline-report.entity/restaurant-information-in-aloline-report.entity";
export declare class RestaurantInformationInAlolineReportResponse {
    phone: string;
    name: string;
    email: string;
    address: string;
    logo: string;
    banner: string;
    average_rate: number;
    rate_count: number;
    customer_members: number;
    total_accumulate_point: number;
    used_accumulate_point: number;
    total_promotion_point: number;
    used_promotion_point: number;
    total_alo_point: number;
    total_amount: number;
    constructor(entity?: RestaurantInformationInAlolineReportEntity);
}
