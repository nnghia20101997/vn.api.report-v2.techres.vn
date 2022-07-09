import { RestaurantCustomerReportEntity } from "../restaurant-customer-report.entity/restaurant-customer-report.entity";
import { RestaurantCustomerReportOutputEntity } from "../restaurant-customer-report.entity/restaurant-customer-report.output.entity";
export declare class RestaurantCustomerReportResponse {
    listDataReport: RestaurantCustomerReportEntity[];
    total_customer_go_to_restaurant: number;
    total_customer_register: number;
    total_customer_save_point: number;
    total_customer_use_point: number;
    total_customer_receiving_gifts: number;
    total_orders: number;
    constructor(listDataResponse?: RestaurantCustomerReportEntity[], entityOutput?: RestaurantCustomerReportOutputEntity);
}
