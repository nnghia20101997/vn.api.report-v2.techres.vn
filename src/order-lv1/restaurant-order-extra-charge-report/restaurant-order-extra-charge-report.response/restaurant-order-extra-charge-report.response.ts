import { RestaurantOrderExtraChargeReportEntity } from "../restaurant-order-extra-charge-report.entity/restaurant-order-extra-charge-report.entity";

export class RestaurantOrderExtraChargeReportResponse{

    report_time : string ;

    timestamp: string;

    total_amount : number ;  

    constructor(entity ?: RestaurantOrderExtraChargeReportEntity){
        this.report_time = entity ? entity.report_time : "";
        this.timestamp = entity ? entity.timestamp : ""   ;
        this.total_amount = entity ? +entity.total_amount : 0 ;
    }

     public mapToList(data: RestaurantOrderExtraChargeReportEntity[]) {
      let response: RestaurantOrderExtraChargeReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantOrderExtraChargeReportResponse(e));
      });
      return response;
    }
}