import { RestaurantResultBusinessAndProfitReportEntity } from "../business-result-report.entity/restaurant-result-business-and-profit-report.entity";
import { RestaurantRevenueCostSummaryReportEntity } from "../business-result-report.entity/restaurant-revenue-cost-summary-report.entity";

export class RestaurantRevenueCostSummaryReportResponse{

    id : number;

    restaurant_id : number ; 

    restaurant_brand_id: number;

    branch_id : number ; 

    report_time : string ;

    total_amount : number ;  

    addition_fee_reason_id : number;

    addition_fee_reason_type_id : number;

    addition_fee_reason_content : string ;

    constructor(entity ?: RestaurantRevenueCostSummaryReportEntity){
        this.id = entity ? +entity.id : 0 ;
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
        this.branch_id = entity ? +entity.branch_id : 0 ;
        this.addition_fee_reason_id = entity ? +entity.addition_fee_reason_id : 0 ;
        this.addition_fee_reason_type_id = entity ? +entity.addition_fee_reason_type_id : 0 ;
        this.addition_fee_reason_content = entity ? entity.addition_fee_reason_content : "";
        this.total_amount = entity ? +entity.total_amount : 0 ;
        this.report_time = entity ? entity.report_time : "" ;
    }

     public mapToList(data: RestaurantRevenueCostSummaryReportEntity[]) {
      let response: RestaurantRevenueCostSummaryReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantRevenueCostSummaryReportResponse(e));
      });
      return response;
    }
}