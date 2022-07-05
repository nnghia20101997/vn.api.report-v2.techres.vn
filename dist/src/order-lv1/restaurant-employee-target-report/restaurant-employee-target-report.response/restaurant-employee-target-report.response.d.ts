import { RestaurantEmployeeTargetReportEntity } from "../restaurant-employee-target-report.entity/restaurant-employee-target-report.entity";
export declare class RestaurantEmployeeTargetReportResponse {
    employee_id: number;
    full_name: string;
    restaurant_id: number;
    restaurant_brand_id: number;
    restaurant_brand_name: string;
    branch_id: number;
    branch_name: string;
    employee_role_name: string;
    total_revenue_reality: number;
    total_revenue_target: number;
    ratio: number;
    constructor(entity?: RestaurantEmployeeTargetReportEntity);
    mapToList(data: RestaurantEmployeeTargetReportEntity[]): RestaurantEmployeeTargetReportEntity[];
}
