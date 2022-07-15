import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { TmsRestaurantRevenueCostProfitEstimateEntity } from "../tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-estimate.entity";

export class TmsRestaurantCostProfitEstimateResponse {

    total_revenue: number;

    total_cost: number;

    total_profit: number;

    report_time: string;

    constructor (baseEntity?: TmsRestaurantRevenueCostProfitEstimateEntity) {
        this.total_revenue = baseEntity ? +baseEntity.total_revenue : 0; 
        this.total_cost = baseEntity ? +baseEntity.total_cost : 0; 
        this.total_profit = baseEntity ? +baseEntity.total_profit : 0; 
        this.report_time = baseEntity ? UtilsDate.formatDateTimeVNToStringNoTime(new Date(baseEntity.report_time)) : ""; 
    }

    public mapToList(baseEntity: TmsRestaurantRevenueCostProfitEstimateEntity[]) : TmsRestaurantCostProfitEstimateResponse[] {
        let data: TmsRestaurantCostProfitEstimateResponse[] = [];
        baseEntity.forEach(e => {
            data.push(new TmsRestaurantCostProfitEstimateResponse(e));
        });

        return data;
    }
}