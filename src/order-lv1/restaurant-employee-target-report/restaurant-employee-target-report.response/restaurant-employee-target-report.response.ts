import { RestaurantEmployeeTargetReportEntity } from "../restaurant-employee-target-report.entity/restaurant-employee-target-report.entity";

export class RestaurantEmployeeTargetReportResponse{

    employee_id: number;

    full_name: string;

    restaurant_id: number ;

    restaurant_brand_id: number ;
    
    restaurant_brand_name : string ;

    branch_id : number ; 

    branch_name : string ;

    employee_role_name : string ; 

    total_revenue_reality : number ; 

    total_revenue_target : number ;

    ratio : number ;

    constructor(entity ?: RestaurantEmployeeTargetReportEntity){
        this.employee_id = entity ? +entity.employee_id : 0;
        this.full_name = entity ? entity.full_name : "";
        this.restaurant_id = entity ? +entity.restaurant_id : 0;
        this.restaurant_brand_id = entity ? +entity.restaurant_brand_id : 0 ;
        this.restaurant_brand_name = entity ? entity.restaurant_brand_name : "";
        this.branch_id = entity ? +entity.branch_id : 0 ;
        this.branch_name = entity ? entity.branch_name : "";
        this.employee_role_name = entity ? entity.employee_role_name : "";
        this.total_revenue_reality = entity ? +entity.total_revenue_reality : 0 ;
        this.total_revenue_target = entity ? +entity.total_revenue_target : 0 ;
        this.ratio = entity ? +entity.ratio : 0 ;
    }

     public mapToList(data: RestaurantEmployeeTargetReportEntity[]) {
      let response: RestaurantEmployeeTargetReportEntity[] = [];
      data.forEach((e) => {
        response.push(new RestaurantEmployeeTargetReportResponse(e));
      });
      return response;
    }
}