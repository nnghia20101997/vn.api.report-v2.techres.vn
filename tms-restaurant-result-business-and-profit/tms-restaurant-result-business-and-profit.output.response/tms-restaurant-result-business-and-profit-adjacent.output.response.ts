import { TmsRestaurantResultBusinessAndProfitAdjacentReportOutputEntity } from "../tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit-adjacent.output.entity";
import { TmsRestaurantResultBusinessAndProfitAdjacentReportEntity } from "../tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-adjacent.entity";
import { RestaurantResultBusinessAndProfitAdjacentReportResponse } from "../tms-restaurant-result-business-and-profit.response/tms-restaurant-result-business-and-profit-adjacent.response";

export class RestaurantResultBusinessAndProfitAdjacentReportOutputResponse {

    list: RestaurantResultBusinessAndProfitAdjacentReportResponse[];

    total_profit: number;
	total_profit_adjacent: number;
	total_rate_profit_adjacent: number;

    constructor(baseEntities: TmsRestaurantResultBusinessAndProfitAdjacentReportEntity[], output: TmsRestaurantResultBusinessAndProfitAdjacentReportOutputEntity) {
        this.list = new RestaurantResultBusinessAndProfitAdjacentReportResponse().mapToList(baseEntities);
        this.total_profit = +output.total_profit;
        this.total_profit_adjacent = +output.total_profit_adjacent;
        this.total_rate_profit_adjacent = +output.total_rate_profit_adjacent;
    }
 
}