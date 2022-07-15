import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { TmsRestaurantCostReportEntity } from "../tms-restaurant-cost-report.entity/tms-restaurant-cost-report.entity";

export class TmsRestaurantCostReportResponse {
    report_time: string;
    restaurant_id: number;
    restaurant_brand_id: number;
    branch_id: number;
    total_cost: number;


    constructor(tmsRestaurantCostReportEntity? : TmsRestaurantCostReportEntity) {
        this.report_time = tmsRestaurantCostReportEntity? UtilsDate.formatDateTimeVNToStringNoTime(new Date(tmsRestaurantCostReportEntity.report_time)) : "";
        this.restaurant_id = tmsRestaurantCostReportEntity? +tmsRestaurantCostReportEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantCostReportEntity? +tmsRestaurantCostReportEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantCostReportEntity? +tmsRestaurantCostReportEntity.branch_id : 0;
        this.total_cost = tmsRestaurantCostReportEntity? +tmsRestaurantCostReportEntity.total_cost : 0;
    }

    public mapToList(baseEntities: TmsRestaurantCostReportEntity[]): TmsRestaurantCostReportResponse[] {
        let data: TmsRestaurantCostReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantCostReportResponse(e));
        })

        return data;
    }
}