import { RestaurantCashDetailReportEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity";
import { RestaurantCashDetailReportOutputEntity } from "../restaurant-cash-detail-report.entity/restaurant-cash-detail-report.output.entity";

export class RestaurantCashDetailReportResponse{

   listDataReport : RestaurantCashDetailReportEntity[];

   total_amount_receipt: number = 0;

   total_amount_payment: number = 0;

   total_amount: number = 0;

   total_record_receipt: number = 0;

   total_record_payment: number = 0;

   total_record: number = 0;


    constructor(listDataResponse ?: RestaurantCashDetailReportEntity[] , 
                entityAmount ?: RestaurantCashDetailReportOutputEntity){
        this.listDataReport = listDataResponse  ;
        this.total_amount_receipt = entityAmount ? +entityAmount.total_amount_receipt : 0 ;
        this.total_amount_payment =  entityAmount ? +entityAmount.total_amount_payment : 0 ;
        this.total_amount = entityAmount ? +entityAmount.total_amount : 0 ;
        this.total_record_receipt =  entityAmount ? +entityAmount.total_record_receipt : 0 ;
        this.total_record_payment = entityAmount ? +entityAmount.total_record_payment : 0 ;
        this.total_record =  entityAmount ? +entityAmount.total_record : 0 ;
    }

  
}