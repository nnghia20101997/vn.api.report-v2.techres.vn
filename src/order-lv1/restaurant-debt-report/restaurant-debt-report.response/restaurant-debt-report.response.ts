import { RestaurantDebtReportEntity } from "../restaurant-debt-report.entity/restaurant-debt-report.entity";

export class RestaurantDebtReportResponse{

    id : number ;
                
    count : number ;  
      
    total_amount : number ; 
      
    waiting_payment_count : number ; 
      
    waiting_payment_amount : number ; 
      
    paid_count : number ; 
      
    paid_amount : number ; 
      
    debt_count : number ; 
      
    debt_amount : number ;
          
    return_count : number ;
      
    total_return_amount : number ;

    constructor(entity ?: RestaurantDebtReportEntity){
        this.count = entity ? +entity.count : 0;
        this.total_amount = entity ? +entity.total_amount : 0 ;
        this.waiting_payment_count = entity ? +entity.waiting_payment_count : 0 ;
        this.waiting_payment_amount = entity ? +entity.waiting_payment_amount : 0;
        this.paid_count = entity ? +entity.paid_count : 0 ;
        this.paid_amount = entity ? +entity.paid_amount : 0 ;
        this.debt_count = entity ? +entity.debt_count : 0 ;
        this.debt_amount = entity ? +entity.debt_amount : 0 ;
        this.return_count = entity ? +entity.return_count : 0;
        this.total_return_amount = entity ? +entity.total_return_amount : 0 ;
       
    }

     public mapToList(data: RestaurantDebtReportEntity[]) {
      let response: RestaurantDebtReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantDebtReportResponse(e));
      });
      return response;
    }
}