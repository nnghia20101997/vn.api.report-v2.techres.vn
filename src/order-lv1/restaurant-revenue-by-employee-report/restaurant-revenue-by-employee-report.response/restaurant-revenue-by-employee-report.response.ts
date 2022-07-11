import { RestaurantRevenueByEmployeeReportEntity } from "../restaurant-revenue-by-employee-report.entity/restaurant-revenue-by-employee-report.entity";
import { RestaurantRevenueByEmployeeReportOutputEntity } from "../restaurant-revenue-by-employee-report.entity/restaurant-revenue-by-employee-report.output.entity";

export class RestaurantRevenueByEmployeeReportResponse {
  data: RestaurantRevenueByEmployeeReportEntity[];

  total_revenue : number ;

  constructor(
        data?: RestaurantRevenueByEmployeeReportEntity[],
        entity?: RestaurantRevenueByEmployeeReportOutputEntity
  ) {
    this.total_revenue = entity ? entity.total_revenue : 0 ;
    this.data = data;
      }


}
