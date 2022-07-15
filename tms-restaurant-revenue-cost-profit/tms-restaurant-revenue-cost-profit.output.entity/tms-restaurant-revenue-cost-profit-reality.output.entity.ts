export class TmsRestaurantRevenueCostProfitRealityOutputEntity {
    total_revenue: number;

    total_cost: number;

    total_profit: number;

    rate_total_profit: number;


    constructor(tmsRestaurantRevenueCostProfitRealityOutputEntity?: TmsRestaurantRevenueCostProfitRealityOutputEntity) {
         
        this.total_revenue = tmsRestaurantRevenueCostProfitRealityOutputEntity? + tmsRestaurantRevenueCostProfitRealityOutputEntity.total_revenue : 0;
        this.total_cost = tmsRestaurantRevenueCostProfitRealityOutputEntity? + tmsRestaurantRevenueCostProfitRealityOutputEntity.total_cost : 0;
        this.total_profit = tmsRestaurantRevenueCostProfitRealityOutputEntity? + tmsRestaurantRevenueCostProfitRealityOutputEntity.total_profit : 0;
        this.rate_total_profit = tmsRestaurantRevenueCostProfitRealityOutputEntity? + tmsRestaurantRevenueCostProfitRealityOutputEntity.rate_total_profit : 0;
        
    }
}