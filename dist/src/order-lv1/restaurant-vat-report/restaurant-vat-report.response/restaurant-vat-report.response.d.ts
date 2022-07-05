import { RestaurantVatReportEntity } from "../restaurant-vat-report.entity/restaurant-vat-report.entity";
export declare class RestaurantVatReportResponse {
    restaurant_id: number;
    restaurant_brand_id: number;
    branch_id: number;
    report_time: string;
    amount: number;
    constructor(entity?: RestaurantVatReportEntity);
    mapToList(data: RestaurantVatReportEntity[]): RestaurantVatReportEntity[];
}
