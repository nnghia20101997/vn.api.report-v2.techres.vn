import { TmsRestaurantCostSamePeriodReportEntity } from "../tms-restaurant-cost-report.entity/tms-restaurant-cost-same-period-report.entity";

export class TmsRestaurantCostSamePeriodReportResponse {


    report_time: string;

    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;
    
    total_cost: number;

    rate_cost_same_period: number;

    total_current_cost: number;
    
    report_current_time: number;

    constructor(tmsRestaurantCostSamePeriodReportEntity?: TmsRestaurantCostSamePeriodReportEntity) {
        this.report_time = tmsRestaurantCostSamePeriodReportEntity? tmsRestaurantCostSamePeriodReportEntity.report_time : "";
        this.restaurant_id = tmsRestaurantCostSamePeriodReportEntity? +tmsRestaurantCostSamePeriodReportEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantCostSamePeriodReportEntity? +tmsRestaurantCostSamePeriodReportEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantCostSamePeriodReportEntity? +tmsRestaurantCostSamePeriodReportEntity.branch_id : 0;
        this.total_cost = tmsRestaurantCostSamePeriodReportEntity? +tmsRestaurantCostSamePeriodReportEntity.total_cost : 0;

        this.rate_cost_same_period = tmsRestaurantCostSamePeriodReportEntity? +tmsRestaurantCostSamePeriodReportEntity.rate_cost_same_period : 0;
        this.total_current_cost = tmsRestaurantCostSamePeriodReportEntity? +tmsRestaurantCostSamePeriodReportEntity.total_current_cost : 0;
        this.report_current_time = tmsRestaurantCostSamePeriodReportEntity? +tmsRestaurantCostSamePeriodReportEntity.report_current_time : 0;
    }

    public mapToList(baseEntities?: TmsRestaurantCostSamePeriodReportEntity[]): TmsRestaurantCostSamePeriodReportResponse[] {
        let data: TmsRestaurantCostSamePeriodReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantCostSamePeriodReportResponse(e))
        });

        return data;
    }
}