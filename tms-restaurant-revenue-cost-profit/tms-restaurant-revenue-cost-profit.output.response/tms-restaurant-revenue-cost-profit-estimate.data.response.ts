import { TmsRestaurantRevenueCostProfitEstimateEntity } from "../tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-estimate.entity";
import { TmsRestaurantRevenueCostProfitEstimateOutputEntity } from "../tms-restaurant-revenue-cost-profit.output.entity/tms-restaurant-revenue-cost-profit-estimate.output.entity";
import { TmsRestaurantCostProfitEstimateResponse } from "../tms-restaurant-revenue-cost-profit.response/tms-restaurant-revenue-cost-profit-estimate.response";

export class TmsRestaurantRevenueCostProfitEstimateDataResponse {

    list: TmsRestaurantCostProfitEstimateResponse[];

    total_revenue: number;

    total_cost: number;

    total_profit: number;

    rate_total_profit: number;





    constructor(baseEntity?: TmsRestaurantRevenueCostProfitEstimateEntity[], tmsRestaurantRevenueCostProfitEstimateOutputEntity?: TmsRestaurantRevenueCostProfitEstimateOutputEntity) {
        this.list = new TmsRestaurantCostProfitEstimateResponse().mapToList(baseEntity);
        this.total_revenue = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.total_revenue : 0;
        this.total_cost = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.total_cost : 0;
        this.total_profit = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.total_profit : 0;
        this.rate_total_profit = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.rate_total_profit : 0;
       
    }

    
}