import { RestaurantRevenueByFoodReportEntity } from "../restaurant-revenue-by-food-report.entity/restaurant-revenue-by-food-report.entity";

export class RestaurantRevenueByFoodReportResponse{

    food_id: number;
     
    food_name: string;
     
    food_avatar : string ; 
     
    food_avatar_thump : string ;
          
    category_id : number ;  
     
    category_name : string ; 
     
    category_type : number ; 
     
    unit_name : string ; 
     
    quantity : number ; 
         
    original_price : number ; 
     
    price : number ; 
         
    total_original_amount : number ; 
     
    total_amount : number ; 
         
    profit : number ; 
     
    profit_ratio : number ; 


    constructor(entity ?: RestaurantRevenueByFoodReportEntity){
        this.food_id = entity ? +entity.food_id : 0 ;
     
        this.food_name = entity ? entity.food_name : "" ;
         
        this.food_avatar = entity ? entity.food_avatar : "" ;
         
        this.food_avatar_thump = entity ? entity.food_avatar_thump : "" ;
              
        this.category_id = entity ? +entity.category_id : 0 ;
         
        this.category_name = entity ? entity.category_name : "" ;
         
        this.category_type = entity ? +entity.category_type : 0 ;
         
        this.unit_name = entity ? entity.unit_name : "" ;
         
        this.quantity = entity ? +entity.quantity : 0 ;
             
        this.original_price = entity ? +entity.original_price : 0 ;
         
        this.price = entity ? +entity.price : 0 ;
             
        this.total_original_amount = entity ? +entity.total_original_amount : 0 ;
         
        this.total_amount = entity ? +entity.total_amount : 0 ;
             
        this.profit = entity ? +entity.profit : 0 ;
         
        this.profit_ratio = entity ? +entity.profit_ratio : 0 ;
    }

     public mapToList(data: RestaurantRevenueByFoodReportEntity[]) {
      let response: RestaurantRevenueByFoodReportResponse[] = [];
      data.forEach((e) => {
        response.push(new RestaurantRevenueByFoodReportResponse(e));
      });
      return response;
    }
}