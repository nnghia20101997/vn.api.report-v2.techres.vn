import { RestaurantRevenueSummaryReportEntity } from "../restaurant-revenue-summary-report.entity/restaurant-revenue-summary-report.entity";

export class RestaurantRevenueSummaryReportResponse{

    id : number ;
     
    restaurant_id: number;
     
    restaurant_brand_id: number;
     
    branch_id : number ; 
     
    type: number;
     
    automatically_generated_type: number;
     
    is_automatically_generated : number ; 
     
    addition_fee_reason_type_id: number;
     
    addition_fee_reason_id : number ; 
     
    addition_fee_reason_content : string ;
         
    amount : number ; 
         
    total_order : number ; 

    constructor(entity ?: RestaurantRevenueSummaryReportEntity){
        this.id = entity ? +entity.id : 0;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
        this.branch_id = entity ? +entity.branch_id : 0 ;
        this.type = entity ? +entity.type : 0;
        this.automatically_generated_type = entity ? +entity.automatically_generated_type : 0 ;
        this.is_automatically_generated = entity ? +entity.is_automatically_generated : 0 ;
        this.addition_fee_reason_type_id = entity ? +entity.addition_fee_reason_type_id : 0 ;
        this.addition_fee_reason_id = entity ? +entity.addition_fee_reason_id : 0 ;
        this.addition_fee_reason_content = entity ? entity.addition_fee_reason_content : "" ;
        this.amount = entity ? +entity.amount : 0 ;
        this.total_order = entity ? +entity.total_order : 0 ;
    }

     public mapToList(data: RestaurantRevenueSummaryReportEntity[]) {
      let response: RestaurantRevenueSummaryReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantRevenueSummaryReportResponse(e));
      });
      return response;
    }
}