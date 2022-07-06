import { RestaurantProfitRealityReportEntity } from "../restaurant-profit-reality-report.entity/restaurant-profit-reality-report.entity";

export class RestaurantProfitRealityReportResponse{

    restaurant_id: number;
      
    restaurant_brand_id: number;
      
    total_revenue : number ; 
      
    total_cost : number ;
           
    total_profit : number ;  
      
    total_debt_amount : number ; 


    constructor(entity ?: RestaurantProfitRealityReportEntity){
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
        this.total_revenue = entity ? +entity.total_revenue : 0 ;
        this.total_cost = entity ? +entity.total_cost :0 ;
        this.total_profit = entity ? +entity.total_profit : 0 ;
        this.total_debt_amount = entity ? +entity.total_debt_amount : 0 ;
    }

     public mapToList(data: RestaurantProfitRealityReportEntity[]) {
      let response: RestaurantProfitRealityReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantProfitRealityReportResponse(e));
      });
      return response;
    }
}