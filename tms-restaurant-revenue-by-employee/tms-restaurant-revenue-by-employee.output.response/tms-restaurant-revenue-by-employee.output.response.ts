import { TmsRestaurantRevenueByEmployeeReportEntity } from "../tms-restaurant-revenue-by-employee.entity/tms-restaurant-revenue-by-employee.entity";
import { TmsRestaurantRevenueByEmployeeReportOutputEntity } from "../tms-restaurant-revenue-by-employee.output.entity/tms-restaurant-revenue-by-employee.output.entity";
import { TmsRestaurantRevenueByEmployeeReportResponse } from "../tms-restaurant-revenue-by-employee.response/tms-restaurant-revenue-by-employee.response";

export class TmsRestaurantRevenueByEmployeeReportOutputResponse {
    list: TmsRestaurantRevenueByEmployeeReportResponse[];

    total_revenue: number;

    constructor(baseEntities: TmsRestaurantRevenueByEmployeeReportEntity[], output: TmsRestaurantRevenueByEmployeeReportOutputEntity) {
        this.list = new TmsRestaurantRevenueByEmployeeReportResponse().mapToList(baseEntities);
        this.total_revenue = +output.total_revenue;
    }
}