import { RestaurantResultBusinessAndProfitReportEntity } from "../business-result-report.entity/restaurant-result-business-and-profit-report.entity";

export class RestaurantResultBusinessAndProfitReportResponse{

    id : number;

    restaurant_id : number ; 

    restaurant_brand_id: number;

    branch_id : number ; 

    report_time : string ;

    total_revenue_amount : number ;  

    total_cost_amount : number;

    total_profit_amount : number;

    constructor(entity ?: RestaurantResultBusinessAndProfitReportEntity){
        this.id = entity ? +entity.id : 0 ;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
        this.branch_id = entity ? +entity.branch_id : 0 ;
        this.total_revenue_amount = entity ? +entity.total_revenue_amount : 0 ;
        this.total_cost_amount = entity ? +entity.total_cost_amount : 0 ;
        this.total_profit_amount = entity ? +entity.total_profit_amount : 0 ;
        this.report_time = entity ? entity.report_time : "" ;
    }

     public mapToList(data: RestaurantResultBusinessAndProfitReportEntity[]) {
      let response: RestaurantResultBusinessAndProfitReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantResultBusinessAndProfitReportResponse(e));
      });
      return response;
    }
}