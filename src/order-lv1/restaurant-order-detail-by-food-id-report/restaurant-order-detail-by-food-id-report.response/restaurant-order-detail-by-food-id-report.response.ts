import { RestaurantOrderDetailByFoodIdReportEntity } from "../restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.entity";
import { RestaurantOrderDetailByFoodIdReportOutputEntity } from "../restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.output.entity";

export class RestaurantOrderDetailByFoodIdReportResponse{

  list_data : RestaurantOrderDetailByFoodIdReportEntity[];

  total_record : number ;

    constructor(list_data ?: RestaurantOrderDetailByFoodIdReportEntity[] , 
              entity ? : RestaurantOrderDetailByFoodIdReportOutputEntity){
        this.total_record = entity ? +entity.total_record : 0 ;
        this.list_data = list_data ; 
        
       
    }

    
}