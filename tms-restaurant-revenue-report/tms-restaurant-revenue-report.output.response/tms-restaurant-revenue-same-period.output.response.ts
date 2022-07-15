import { TmsRestaurantRevenueSamePeriodReportEntity } from "../tms-restaurant-revenue-report.entity/tms-restaurant-revenue-same-period.entity";
import { TmsRestaurantRevenueSamePeriodReportOutputEntity } from "../tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-same-period.output.entity";
import { TmsRestaurantRevenueSamePeriodReportResponse } from "../tms-restaurant-revenue-report.response/tms-restaurant-revenue-same-period.response";

export class TmsRestaurantRevenueSamePeriodReportOutputResponse {

    list: TmsRestaurantRevenueSamePeriodReportResponse[];

    total_revenue: number;
	total_revenue_same_period: number;
	total_rate_revenue_same_period: number;


    constructor(baseEntities: TmsRestaurantRevenueSamePeriodReportEntity[], output: TmsRestaurantRevenueSamePeriodReportOutputEntity) {
        this.list = new TmsRestaurantRevenueSamePeriodReportResponse().mapToList(baseEntities);
        this.total_revenue = +output.total_revenue;
        this.total_revenue_same_period = +output.total_revenue_same_period;
        this.total_rate_revenue_same_period = +output.total_rate_revenue_same_period;
    }
}