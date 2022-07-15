import { TmsRestaurantResultBusinessAndProfitAdjacentReportEntity } from "../tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-adjacent.entity";

export class RestaurantResultBusinessAndProfitAdjacentReportResponse {
   
    restaurant_id: number;
   
    restaurant_brand_id: number;
   
    branch_id: number;
   
    total_revenue_amount: number;
   
    total_cost_amount: number;
   
    total_profit_amount: number;
   
    total_current_profit_amount: number;
   
    report_time: string;
   
    report_current_time: string;
   
    rate_business_and_profit_adjacent: number;

    constructor(baseEntity?: TmsRestaurantResultBusinessAndProfitAdjacentReportEntity) {
        this.restaurant_id = baseEntity? +baseEntity.restaurant_id : 0;
        this.restaurant_brand_id = baseEntity? +baseEntity.restaurant_brand_id : 0;
        this.branch_id = baseEntity? +baseEntity.branch_id : 0;
        this.total_revenue_amount = baseEntity? +baseEntity.total_revenue_amount : 0;
        this.total_cost_amount = baseEntity? +baseEntity.total_cost_amount : 0;
        this.total_profit_amount = baseEntity? +baseEntity.total_profit_amount : 0;
        this.total_current_profit_amount = baseEntity? +baseEntity.total_current_profit_amount : 0;
        this.report_time = baseEntity? baseEntity.report_time : "";
        this.report_current_time = baseEntity? baseEntity.report_current_time : "";
        this.rate_business_and_profit_adjacent = baseEntity? +baseEntity.rate_business_and_profit_adjacent : 0;
    }

    public mapToList(baseEntities: TmsRestaurantResultBusinessAndProfitAdjacentReportEntity[]): RestaurantResultBusinessAndProfitAdjacentReportResponse[] {
        let data: RestaurantResultBusinessAndProfitAdjacentReportResponse[] = [];

        baseEntities.forEach(e => {
            data.push(new RestaurantResultBusinessAndProfitAdjacentReportResponse(e))
        });

        return data;
    }
}