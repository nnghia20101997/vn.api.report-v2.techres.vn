import { TmsRestaurantRevenueCostProfitRealityEntity } from "../tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-reality.entity";
import { TmsRestaurantRevenueCostProfitRealityOutputEntity } from "../tms-restaurant-revenue-cost-profit.output.entity/tms-restaurant-revenue-cost-profit-reality.output.entity";
import { TmsRestaurantRevenueCostProfitRealityResponse } from "../tms-restaurant-revenue-cost-profit.response/tms-restaurant-revenue-cost-profit-reality.response";

export class TmsRestaurantRevenueCostProfitRealityDataResponse {
    
    list: TmsRestaurantRevenueCostProfitRealityResponse[];

    total_revenue: number;

    total_cost: number;

    total_profit: number;

    rate_total_profit: number;

    constructor(baseEntity?: TmsRestaurantRevenueCostProfitRealityEntity[], outputEntity?: TmsRestaurantRevenueCostProfitRealityOutputEntity) {

        this.list = baseEntity? new TmsRestaurantRevenueCostProfitRealityResponse().mapToList(baseEntity) : [];
        this.total_revenue = outputEntity? +outputEntity.total_revenue : 0;
        this.total_cost = outputEntity? +outputEntity.total_cost : 0;
        this.total_profit = outputEntity? +outputEntity.total_profit : 0;
        this.rate_total_profit = outputEntity? +outputEntity.rate_total_profit : 0;

    }


}