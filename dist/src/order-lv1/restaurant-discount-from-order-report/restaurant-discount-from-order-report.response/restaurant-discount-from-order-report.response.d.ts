import { RestaurantDiscountFromOrderReportEntity } from "../restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity";
export declare class RestaurantDiscountFromOrderReportResponse {
    report_time: string;
    total_amount: number;
    constructor(entity?: RestaurantDiscountFromOrderReportEntity);
    mapToList(data: RestaurantDiscountFromOrderReportEntity[]): RestaurantDiscountFromOrderReportEntity[];
}
