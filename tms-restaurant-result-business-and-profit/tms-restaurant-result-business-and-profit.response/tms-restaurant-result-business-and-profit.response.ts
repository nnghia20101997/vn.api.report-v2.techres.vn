import { TmsRestaurantResultBusinessAndProfitReportEntity } from "../tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit.entity";

export class TmsRestaurantResultBusinessAndProfitResponse {


    id: number;

    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;

    total_revenue_amount: number;

    total_cost_amount: number;

    total_profit_amount: number;
    
    report_time: number;

    constructor(tmsRestaurantResultBusinessAndProfitEntity?: TmsRestaurantResultBusinessAndProfitReportEntity) {
        this.id = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.id : 0;
        this.restaurant_id = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.restaurant_id : 0;
        this.restaurant_brand_id = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.restaurant_brand_id : 0;
        this.branch_id = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.branch_id : 0;
        this.total_revenue_amount = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.total_revenue_amount : 0;
        this.total_cost_amount = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.total_cost_amount : 0;
        this.total_profit_amount = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.total_profit_amount : 0;
    
        this.report_time = tmsRestaurantResultBusinessAndProfitEntity? +tmsRestaurantResultBusinessAndProfitEntity.report_time : 0;
    }

    public mapToList(baseEntity?: TmsRestaurantResultBusinessAndProfitReportEntity[]) : TmsRestaurantResultBusinessAndProfitResponse[] {
        let data: TmsRestaurantResultBusinessAndProfitResponse[] = [];
        baseEntity.forEach(e => {
            data.push(new TmsRestaurantResultBusinessAndProfitResponse(e));
        });
        return data;
    }
} 