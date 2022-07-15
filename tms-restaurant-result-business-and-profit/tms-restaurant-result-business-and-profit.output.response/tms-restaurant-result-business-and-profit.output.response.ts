import { TmsRestaurantResultBusinessAndProfitReportEntity } from "../tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit.entity";
import { TmsRestaurantResultBusinessAndProfitReportOutputEntity } from "../tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit.output.entity";
import { TmsRestaurantResultBusinessAndProfitResponse } from "../tms-restaurant-result-business-and-profit.response/tms-restaurant-result-business-and-profit.response";

export class RestaurantResultBusinessAndProfitReportOutputResponse {
    list: TmsRestaurantResultBusinessAndProfitResponse[];

    total_profit: number;

    constructor(baseEntities: TmsRestaurantResultBusinessAndProfitReportEntity[], output: TmsRestaurantResultBusinessAndProfitReportOutputEntity) {
        this.list = new TmsRestaurantResultBusinessAndProfitResponse().mapToList(baseEntities);
        this.total_profit = +output.total_profit;
    }
}