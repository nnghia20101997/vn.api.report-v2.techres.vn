import { TmsRestaurantCostAdjacentReportEntity } from "../tms-restaurant-cost-report.entity/tms-restaurant-cost-adjacent-report.entity";
import { TmsRestaurantCostAdjacentReportOutputEntity } from "../tms-restaurant-cost-report.output.entity/tms-restaurant-cost-adjacent-report.output.entity";
import { TmsRestaurantCostAdjacentReportResponse } from "../tms-restaurant-cost-report.response/tms-restaurant-cost-adjacent-report.response";

export class TmsRestaurantCostAdjacentReportOutputResponse {
    list: TmsRestaurantCostAdjacentReportResponse[];

    total_cost: number;
	total_cost_adjacent: number;
	total_rate_cost_adjacent: number;
    
    constructor(baseEntities: TmsRestaurantCostAdjacentReportEntity[], output: TmsRestaurantCostAdjacentReportOutputEntity) {
        
        this.list = new TmsRestaurantCostAdjacentReportResponse().mapToList(baseEntities);
        this.total_cost = +output.total_cost;
        this.total_cost_adjacent = +output.total_cost_adjacent;
        this.total_rate_cost_adjacent = +output.total_rate_cost_adjacent;

    }
}