import { RestaurantCashDetailReportEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity";
import { RestaurantCashDetailReportOutputEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.output.entity";

export class RestaurantCashDetailReportResponse{

   list_data_report: RestaurantCashDetailReportEntity[];

   total_amount_receipt: number = 0;

   total_amount_payment: number = 0;

   total_amount: number = 0;

   total_record_receipt: number = 0;

   total_record_payment: number = 0;

   total_record: number = 0;


    constructor(list_data_report ?: RestaurantCashDetailReportEntity[] , 
                entity_amount ?: RestaurantCashDetailReportOutputEntity){
        this.list_data_report = list_data_report  ;
        this.total_amount_receipt =  entity_amount ? +entity_amount.total_amount_receipt : 0 ;
        this.total_amount_payment =   entity_amount ? +entity_amount.total_amount_payment : 0 ;
        this.total_amount =  entity_amount ? +entity_amount.total_amount : 0 ;
        this.total_record_receipt =   entity_amount ? +entity_amount.total_record_receipt : 0 ;
        this.total_record_payment =  entity_amount ? +entity_amount.total_record_payment : 0 ;
        this.total_record =   entity_amount ? +entity_amount.total_record : 0 ;
    }

  
}