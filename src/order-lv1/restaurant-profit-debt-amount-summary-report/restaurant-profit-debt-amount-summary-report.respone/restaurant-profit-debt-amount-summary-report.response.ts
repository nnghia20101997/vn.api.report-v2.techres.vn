import { RestaurantProfitDebtAmountSummaryReportEntity } from "../restaurant-profit-debt-amount-summary-report.entity/restaurant-profit-debt-amount-summary-report.entity";

export class RestaurantProfitDebtAmountSummaryReportResponse{

    id: number;
     
    restaurant_id: number;
     
    restaurant_brand_id: number;
     
    branch_id: number;
     
    addition_fee_reason_type_id: number;
     
    addition_fee_reason_id: number;
     
    addition_fee_reason_content: string;
     
    amount : number ; 
     
    debt_amount : number ;
         
    waiting_amount : number ;  
     
    type : number ; 
     
    automatically_generated_type : number ;  
     
    is_automatically_generated : number ; 

    constructor(entity ?: RestaurantProfitDebtAmountSummaryReportEntity){
        this.id = entity ? +entity.id : 0 ;
        this.restaurant_id = entity ? +entity.restaurant_id : 0 ;
         
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
         
        this.branch_id = entity ? +entity.branch_id : 0 ;
         
        this.addition_fee_reason_type_id = entity ? +entity.addition_fee_reason_type_id : 0 ;
         
        this.addition_fee_reason_id = entity ? +entity.addition_fee_reason_id : 0 ;
         
        this.addition_fee_reason_content = entity ? entity.addition_fee_reason_content : "";
         
        this.amount  = entity ? +entity.amount : 0 ;
         
        this.debt_amount  = entity ? +entity.debt_amount : 0 ;
             
        this.waiting_amount = entity ? +entity.waiting_amount : 0 ;
         
        this.type = entity ? +entity.type : 0 ;
         
        this.automatically_generated_type = entity ? +entity.automatically_generated_type : 0 ;
         
        this.is_automatically_generated = entity ? +entity.is_automatically_generated : 0 ;
    }

     public mapToList(data: RestaurantProfitDebtAmountSummaryReportEntity[]) {
      let response: RestaurantProfitDebtAmountSummaryReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantProfitDebtAmountSummaryReportResponse(e));
      });
      return response;
    }
}