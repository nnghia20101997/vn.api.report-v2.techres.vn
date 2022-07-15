import { TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity } from "../tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-same-period.entity";

export class TmsRestaurantResultBusinessAndProfitSamePeriodReportResponse {
   
    restaurant_id: number;
   
    restaurant_brand_id: number;
   
    branch_id: number;
   
    total_revenue_amount: number;
   
    total_cost_amount: number;
   
    total_profit_amount: number;
   
    total_current_profit_amount: number;
   
    report_time: string;
   
    report_current_time: string;
   
    rate_profit_same_period: number;

    constructor(baseEntity?: TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity)  {
        this.restaurant_id = baseEntity? +baseEntity.restaurant_id : 0;
        this.restaurant_brand_id = baseEntity? +baseEntity.restaurant_brand_id : 0;
        this.branch_id = baseEntity? +baseEntity.branch_id : 0;
        this.total_revenue_amount = baseEntity? +baseEntity.total_revenue_amount : 0;
        this.total_cost_amount = baseEntity? +baseEntity.total_cost_amount : 0;
        this.total_profit_amount = baseEntity? +baseEntity.total_profit_amount : 0;
        this.total_current_profit_amount = baseEntity? +baseEntity.total_current_profit_amount : 0;
        this.report_time = baseEntity? baseEntity.report_time : "";
        this.report_current_time = baseEntity? baseEntity.report_current_time : "";
        this.rate_profit_same_period = baseEntity? +baseEntity.rate_profit_same_period : 0;
    }

    public mapToList(baseEntities: TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity[]): TmsRestaurantResultBusinessAndProfitSamePeriodReportResponse[] {
        let data: TmsRestaurantResultBusinessAndProfitSamePeriodReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantResultBusinessAndProfitSamePeriodReportResponse(e))
        });
        return data;
    }


}