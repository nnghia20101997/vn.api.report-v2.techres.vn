import { Response } from "express";
import { RestaurantCustomerReportQueryDTO } from "./restaurant-customer-report.dto/restaurant-customer-report.query.dto";
import { RestaurantCustomerReportService } from './restaurant-customer-report.service';
export declare class RestaurantCustomerReportController {
    private restaurantCustomerReportService;
    constructor(restaurantCustomerReportService: RestaurantCustomerReportService);
    getRpRestaurantCustomer(restaurantCustomerReportQueryDTO: RestaurantCustomerReportQueryDTO, res: Response): Promise<any>;
}
