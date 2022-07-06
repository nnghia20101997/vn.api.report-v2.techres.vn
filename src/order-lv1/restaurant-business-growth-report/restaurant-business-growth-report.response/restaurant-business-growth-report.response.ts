import { RestaurantBusinessGrowthReportEntity } from "../restaurant-business-growth-report.entity/restaurant-business-growth-report.entity";

export class RestaurantBusinessGrowthReportResponse{

    id : number ;
          
    restaurant_id : number ;  
     
    restaurant_brand_id : number ; 
     
    branch_id : number ; 
     
    total_revenue : number ; 
     
    total_revenue_incremental : number ; 
     
    report_time : string ; 
     
    one_ago_total_revenue : number ; 
     
    two_ago_total_revenue : number ;
         
    three_ago_total_revenue : number ;
     
    four_ago_total_revenue : number ;
     
    total_cost : number ;
     
    total_cost_recuring_average : number ;
     
    total_salary_average : number ;
     
    total_cost_of_departure : number ;
     
    total_cost_of_departure_detail : number ;
     
    total_cost_final : number ;
     
    total_cost_final_detail : number ;
     
    total_cost_happenning : number ;
     
    one_ago_total_cost : number ;
     
    two_ago_total_cost : number ;
     
    three_ago_total_cost : number ;
     
    four_ago_total_cost : number ;
     
    total_cost_supplier_order_of_departure : number ;
     
    total_cost_supplier_order_of_departure_detail : number ;

    constructor(entity ?: RestaurantBusinessGrowthReportEntity){
        this.id = entity ? +entity.id : 0;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
        this.branch_id = entity ? +entity.branch_id : 0 ;
        this.total_revenue = entity ? +entity.total_revenue : 0;
        this.total_revenue_incremental = entity ? +entity.total_revenue_incremental : 0 ;
        this.one_ago_total_revenue = entity ? +entity.one_ago_total_revenue : 0 ;
        this.two_ago_total_revenue = entity ? +entity.two_ago_total_revenue : 0 ;
        this.three_ago_total_revenue = entity ? +entity.three_ago_total_revenue : 0 ;
        this.four_ago_total_revenue = entity ? +entity.four_ago_total_revenue : 0;
        this.total_cost = entity ? +entity.total_cost : 0 ;
        this.total_cost_recuring_average = entity ? +entity.total_cost_recuring_average : 0 ;
        this.total_salary_average = entity ? +entity.total_salary_average : 0 ;
        this.total_cost_of_departure = entity ? +entity.total_cost_of_departure : 0 ;
        this.total_cost_of_departure_detail = entity ? +entity.total_cost_of_departure_detail : 0 ;
        this.total_cost_final = entity ? +entity.total_cost_final : 0 ;
        this.total_cost_final_detail = entity ? +entity.total_cost_final_detail : 0 ;
        this.total_cost_happenning = entity ? +entity.total_cost_happenning : 0 ;
        this.one_ago_total_cost = entity ? +entity.one_ago_total_cost : 0 ;
        this.two_ago_total_cost = entity ? +entity.two_ago_total_cost : 0 ;
        this.three_ago_total_cost = entity ? +entity.three_ago_total_cost : 0 ;
        this.four_ago_total_cost = entity ? +entity.four_ago_total_cost : 0 ;
        this.total_cost_supplier_order_of_departure = entity ? +entity.total_cost_supplier_order_of_departure : 0 ;
        this.total_cost_supplier_order_of_departure_detail = entity ? +entity.total_cost_supplier_order_of_departure_detail : 0 ;
        this.report_time = entity ? entity.report_time : "" ; 
    }

     public mapToList(data: RestaurantBusinessGrowthReportEntity[]) {
      let response: RestaurantBusinessGrowthReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantBusinessGrowthReportResponse(e));
      });
      return response;
    }
}