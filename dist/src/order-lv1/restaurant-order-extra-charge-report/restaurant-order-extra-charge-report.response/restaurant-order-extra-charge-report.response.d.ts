import { RestaurantOrderExtraChargeReportEntity } from "../restaurant-order-extra-charge-report.entity/restaurant-order-extra-charge-report.entity";
export declare class RestaurantOrderExtraChargeReportResponse {
    report_time: string;
    timestamp: string;
    total_amount: number;
    constructor(entity?: RestaurantOrderExtraChargeReportEntity);
    mapToList(data: RestaurantOrderExtraChargeReportEntity[]): RestaurantOrderExtraChargeReportEntity[];
}
