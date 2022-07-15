import { TmsRestaurantCostSamePeriodReportEntity } from "../tms-restaurant-cost-report.entity/tms-restaurant-cost-same-period-report.entity";
import { TmsRestaurantCostSamePeriodReportOutputEntity } from "../tms-restaurant-cost-report.output.entity/tms-restaurant-cost-same-period-report.output.entity";
import { TmsRestaurantCostSamePeriodReportResponse } from "../tms-restaurant-cost-report.response/tms-restaurant-cost-same-period-report.response";

export class TmsRestaurantCostSamePeriodReportOutputResponse {

    list: TmsRestaurantCostSamePeriodReportResponse[];

    total_cost: number;
	total_cost_same_period: number;
	total_rate_cost_same_period: number;

    constructor(baseEntities: TmsRestaurantCostSamePeriodReportEntity[], output: TmsRestaurantCostSamePeriodReportOutputEntity) {
        this.list = new TmsRestaurantCostSamePeriodReportResponse().mapToList(baseEntities);
        this.total_cost = +output.total_cost
        this.total_cost_same_period = +output.total_cost_same_period
        this.total_rate_cost_same_period = +output.total_rate_cost_same_period
    }
}