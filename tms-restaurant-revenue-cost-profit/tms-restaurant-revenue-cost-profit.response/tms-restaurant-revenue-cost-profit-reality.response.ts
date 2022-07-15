import { TmsRestaurantRevenueCostProfitRealityEntity } from "../tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-reality.entity";

export class TmsRestaurantRevenueCostProfitRealityResponse {

    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;

    total_revenue: number;

    total_cost: number;

    total_profit: number;

    big_total_revenue: number;

    big_total_cost: number;

    big_total_profit: number;
    
    report_time: number;

    constructor(tmsRestaurantRevenueCostProfitRealityEntity?: TmsRestaurantRevenueCostProfitRealityEntity) {
        this.restaurant_id = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.branch_id : 0;
        this.total_revenue = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.total_revenue : 0;
        this.total_cost = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.total_cost : 0;
        this.total_profit = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.total_profit : 0;
        this.big_total_revenue = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.big_total_revenue : 0;
        this.big_total_cost = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.big_total_cost : 0;
        this.big_total_profit = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.big_total_profit : 0;
        this.report_time = tmsRestaurantRevenueCostProfitRealityEntity? +tmsRestaurantRevenueCostProfitRealityEntity.report_time : 0;
    }

    public mapToList(baseEntity?: TmsRestaurantRevenueCostProfitRealityEntity[]) : TmsRestaurantRevenueCostProfitRealityResponse[] {
        let data: TmsRestaurantRevenueCostProfitRealityResponse[] = [];
        baseEntity.forEach(e => {
            data.push(new TmsRestaurantRevenueCostProfitRealityResponse(e));
        });
        return data;
    }
} 