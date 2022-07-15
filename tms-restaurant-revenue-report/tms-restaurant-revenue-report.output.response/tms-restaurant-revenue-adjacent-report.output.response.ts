import { TmsRestaurantRevenueAdjacentReportEntity } from "../tms-restaurant-revenue-report.entity/tms-restaurant-revenue-adjacent-report.entity";
import { TmsRestaurantRevenueAdjacentReportOutputEntity } from "../tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-adjacent-report.output.entity";
import { TmsRestaurantRevenueAdjacentReportResponse } from "../tms-restaurant-revenue-report.response/tms-restaurant-revenue-adjacent-report.response";

export class TmsRestaurantRevenueAdjacentReportOutputResponse {

    list: TmsRestaurantRevenueAdjacentReportResponse[];

    total_revenue: number;
	total_revenue_adjacent: number;
	total_rate_revenue_adjacent: number;

    constructor(baseEntities: TmsRestaurantRevenueAdjacentReportEntity[], output: TmsRestaurantRevenueAdjacentReportOutputEntity) {
        this.list = new TmsRestaurantRevenueAdjacentReportResponse().mapToList(baseEntities);
        this.total_revenue = +output.total_revenue;
        this.total_revenue_adjacent = +output.total_revenue_adjacent;
        this.total_rate_revenue_adjacent = +output.total_rate_revenue_adjacent;
    }

}