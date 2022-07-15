export class TmsRestaurantRevenueCostProfitEstimateOutputEntity {

    total_revenue: number;

    total_cost: number;

    total_profit: number;

    rate_total_profit: number;


    constructor(tmsRestaurantRevenueCostProfitEstimateOutputEntity?: TmsRestaurantRevenueCostProfitEstimateOutputEntity) {
         
        this.total_revenue = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.total_revenue : 0;
        this.total_cost = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.total_cost : 0;
        this.total_profit = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.total_profit : 0;
        this.rate_total_profit = tmsRestaurantRevenueCostProfitEstimateOutputEntity? + tmsRestaurantRevenueCostProfitEstimateOutputEntity.rate_total_profit : 0;
        
    }
}