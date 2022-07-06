import { RestaurantOrderDataReportEntity } from "../restaurant-order-data-report.entity/restaurant-order-data-report.entity";
import { RestaurantOrderDataReportOutputEntity } from "../restaurant-order-data-report.entity/restaurant-order-data-report.output.entity";

export class RestaurantOrderDataReportResponse{

    list_data : RestaurantOrderDataReportEntity[];

    total_record: number  ;

    total_vat_amount: number  ;
  
    total_cash_amount: number  ;

    total_transfer_amount : number  ; 

    total_bank_amount : number  ;

    total_amount : number  ;

    total_discount_amount: number  ;
  
    total_customer: number  ;


    constructor(list_data ?: RestaurantOrderDataReportEntity[] , 
              entity ? : RestaurantOrderDataReportOutputEntity){
        this.total_record = entity ? +entity.total_record : 0 ;
        this.total_vat_amount = entity ? +entity.total_vat_amount : 0 ;
        this.total_cash_amount = entity ? +entity.total_cash_amount : 0 ;
        this.total_transfer_amount = entity ? +entity.total_transfer_amount : 0 ;
        this.total_bank_amount = entity ? +entity.total_bank_amount : 0 ;
        this.total_amount = entity ? +entity.total_amount : 0 ;
        this.total_discount_amount = entity ? +entity.total_discount_amount : 0 ;
        this.total_customer = entity ? +entity.total_customer : 0 ;

        this.list_data = list_data ; 
        
       
    }

    
}