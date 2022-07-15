import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { TmsRestaurantCostAdjacentReportEntity } from "../tms-restaurant-cost-report.entity/tms-restaurant-cost-adjacent-report.entity";

export class TmsRestaurantCostAdjacentReportResponse {
   
    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;

    total_cost: number;
    
    report_time: string;

    rate_cost_adjacent : number;

    report_current_time:string;

    total_current_cost : number;

    constructor(tmsRestaurantCostAdjacentReportEntity?: TmsRestaurantCostAdjacentReportEntity) {
        this.restaurant_id = tmsRestaurantCostAdjacentReportEntity ? +tmsRestaurantCostAdjacentReportEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantCostAdjacentReportEntity ? +tmsRestaurantCostAdjacentReportEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantCostAdjacentReportEntity ? +tmsRestaurantCostAdjacentReportEntity.branch_id : 0;
        this.total_cost = tmsRestaurantCostAdjacentReportEntity ? +tmsRestaurantCostAdjacentReportEntity.total_cost : 0;
        this.report_time = tmsRestaurantCostAdjacentReportEntity ? UtilsDate.formatDateTimeVNToStringNoTime(new Date(tmsRestaurantCostAdjacentReportEntity.report_time)) : "";
    
        this.rate_cost_adjacent = tmsRestaurantCostAdjacentReportEntity ? +tmsRestaurantCostAdjacentReportEntity.rate_cost_adjacent : 0;
        this.report_current_time = tmsRestaurantCostAdjacentReportEntity ? tmsRestaurantCostAdjacentReportEntity.report_current_time : "";
        this.total_current_cost = tmsRestaurantCostAdjacentReportEntity ? +tmsRestaurantCostAdjacentReportEntity.total_current_cost : 0;
    }

    public mapToList(baseEntity: TmsRestaurantCostAdjacentReportEntity[]): TmsRestaurantCostAdjacentReportResponse[] {
        let data: TmsRestaurantCostAdjacentReportResponse[] = [];

        baseEntity.forEach(e => {
            data.push(new TmsRestaurantCostAdjacentReportResponse(e));
        });

        return data;

    }
}