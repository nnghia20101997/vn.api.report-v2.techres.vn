import { TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity } from "../tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-same-period.entity";
import { TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputEntity } from "../tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit-same-period.output.entity";
import { TmsRestaurantResultBusinessAndProfitSamePeriodReportResponse } from "../tms-restaurant-result-business-and-profit.response/tms-restaurant-result-business-and-profit-same-period.response";

export class TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputResponse {
    list: TmsRestaurantResultBusinessAndProfitSamePeriodReportResponse[];

    total_profit: number;
	total_profit_same_period: number;
	total_rate_profit_same_period: number;

    constructor(baseEntities: TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity[], output: TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputEntity) {
        this.list = new TmsRestaurantResultBusinessAndProfitSamePeriodReportResponse().mapToList(baseEntities);
        this.total_profit = +output.total_profit;
        this.total_profit_same_period = +output.total_profit_same_period;
        this.total_rate_profit_same_period = +output.total_rate_profit_same_period;
    }
}