import { TmsRestaurantCostReportEntity } from "../tms-restaurant-cost-report.entity/tms-restaurant-cost-report.entity";
import { TmsRestaurantCostReportOutputEntity } from "../tms-restaurant-cost-report.output.entity/tms-restaurant-cost-report.output.entity";
import { TmsRestaurantCostReportResponse } from "../tms-restaurant-cost-report.response/tms-restaurant-cost-report.response";

export class TmsRestaurantCostReportOutputResponse {

    list: TmsRestaurantCostReportResponse[];

    total_cost: number;

    constructor(baseEntities: TmsRestaurantCostReportEntity[], output: TmsRestaurantCostReportOutputEntity) {
        this.list = new TmsRestaurantCostReportResponse().mapToList(baseEntities);
        this.total_cost = +output.total_cost;
    }


}