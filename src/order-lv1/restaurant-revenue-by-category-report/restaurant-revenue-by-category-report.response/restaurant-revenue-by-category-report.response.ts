import { RestaurantRevenueByCategoryReportEntity } from "../restaurant-revenue-by-category-report.entity/restaurant-revenue-by-category-report.entity";

export class RestaurantRevenueByCategoryReportResponse{

    category_id: number;

    category_name: string;

    total_amount : number ; 

    total_original_amount : number ;
     
    profit : number ;  

    profit_ratio : number ; 


    constructor(entity ?: RestaurantRevenueByCategoryReportEntity){
        this.category_id = entity ? +entity.category_id : 0;
        this.category_name = entity ? entity.category_name : "" ;
        this.total_amount = entity ? +entity.total_amount : 0 ;
        this.total_original_amount = entity ? +entity.total_original_amount : 0 ;
        this.profit = entity ? +entity.profit :0 ;
        this.profit_ratio = entity ? +entity.profit_ratio : 0 ;
    }

     public mapToList(data: RestaurantRevenueByCategoryReportEntity[]) {
      let response: RestaurantRevenueByCategoryReportResponse[] = [];
      data.forEach((e) => {
        response.push(new RestaurantRevenueByCategoryReportResponse(e));
      });
      return response;
    }
}