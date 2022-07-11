import { RestaurantDetailFoodReportEntity } from "../restaurant-detail-food-report.entity/restaurant-detail-food-report.entity";

export class RestaurantDetailFoodReportResponse{

    order_id: number;
     
    employee_id: number;
     
    employee_name : string ; 
     
    food_id : number ;
         
    food_name : string ;  
     
    price : number ; 
     
    quantity : number ; 
     
    total_amount : number ; 
     
    unit_name : string ;  
     
    day : string ;
     
    table_id : number ;
     
    table_name : string ;
     
    customer_slot_number : number ;

    constructor(entity ?: RestaurantDetailFoodReportEntity){
        this.order_id = entity ? +entity.order_id : 0;
        this.employee_id = entity ? +entity.employee_id : 0 ;
        this.employee_name = entity ? entity.employee_name :"" ;

        this.food_id = entity ? +entity.food_id : 0;
         
        this.food_name = entity ? entity.food_name:"" ;
        
        this.price = entity ? +entity.price : 0;
        
        this.quantity = entity ? +entity.quantity : 0;
        
        this.total_amount = entity ? +entity.total_amount : 0;
        
        this.unit_name = entity ? entity.unit_name:"" ;
        
        this.day = entity ? entity.day:"" ;
        
        this.table_id = entity ? +entity.table_id : 0;
        
        this.table_name = entity ? entity.table_name:"" ;
        
        this.customer_slot_number = entity ? +entity.customer_slot_number : 0;
    }

     public mapToList(data: RestaurantDetailFoodReportEntity[]) {
      let response: RestaurantDetailFoodReportResponse[] = [];
      data.forEach((e) => {
        response.push(new RestaurantDetailFoodReportResponse(e));
      });
      return response;
    }
}