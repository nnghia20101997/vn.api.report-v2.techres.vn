import { TmsRestaurantRevenueReportOutputEntity } from "../tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-report.output.entity";
import { TmsRestaurantRevenueReportEntity } from "../tms-restaurant-revenue-report.entity/tms-restaurant-revenue-report.entity";
import { TmsRestaurantRevenueReportResponse } from "../tms-restaurant-revenue-report.response/tms-restaurant-revenue-report.response";

export class TmsRestauranRevenueReportOutputResponse {

    list: TmsRestaurantRevenueReportResponse[];

    total_revenue :number;

    constructor(baseEntities: TmsRestaurantRevenueReportEntity[],output:TmsRestaurantRevenueReportOutputEntity){
        this.list = new TmsRestaurantRevenueReportResponse().mapToList(baseEntities);
        this.total_revenue = +output.total_revenue;  
    } 
}