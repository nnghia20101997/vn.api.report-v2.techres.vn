import { RestaurantVatReportEntity } from "../restaurant-vat-report.entity/restaurant-vat-report.entity";

export class RestaurantVatReportResponse {

  report_time : string ; 

  amount: number;

  restaurant_id: number;

  restaurant_brand_id: number;

  branch_id: number;


   
    constructor(
      entity ?: RestaurantVatReportEntity
    ) {
    this.restaurant_id = entity ? +entity.restaurant_id : 0 ;
    this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
    this.branch_id = entity ? +entity.branch_id : 0 ;
    this.amount = entity ? +entity.amount : 0 ;  
    this.report_time =  entity ? entity.report_time : "" ;
     }
  
    public mapToList(data: RestaurantVatReportEntity[]) {
      let response: RestaurantVatReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantVatReportResponse(e));
      });
      return response;
    }
  }
  