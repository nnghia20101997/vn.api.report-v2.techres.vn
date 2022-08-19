import { RestaurantDiscountFromOrderReportEntity } from "../restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity";

export class RestaurantDiscountFromOrderReportResponse{

    report_time : string ;
     
    total_amount : number ;  


    constructor(entity ?: RestaurantDiscountFromOrderReportEntity){
        this.report_time = entity ? entity.report_time : "";
        this.total_amount = entity ? +entity.total_amount : 0 ;
    }

     public mapToList(data: RestaurantDiscountFromOrderReportEntity[]) {
      let response: RestaurantDiscountFromOrderReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantDiscountFromOrderReportResponse(e));
      });
      return response;
    }
}