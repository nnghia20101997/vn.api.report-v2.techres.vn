import { RestaurantCustomerReportEntity } from "../restaurant-customer-report.entity/restaurant-customer-report.entity";
import { RestaurantCustomerReportOutputEntity } from "../restaurant-customer-report.entity/restaurant-customer-report.output.entity";

export class RestaurantCustomerReportResponse{

   listDataReport : RestaurantCustomerReportEntity[];

   total_customer_go_to_restaurant: number = 0;

   total_customer_register: number = 0;

   total_customer_save_point: number = 0;

   total_customer_use_point: number = 0;

   total_customer_receiving_gifts: number = 0;

   total_orders: number = 0;


    constructor(listDataResponse ?: RestaurantCustomerReportEntity[] , 
                entityOutput ?: RestaurantCustomerReportOutputEntity){
        this.listDataReport = listDataResponse  ;
        this.total_customer_go_to_restaurant = entityOutput ? +entityOutput.total_customer_go_to_restaurant : 0 ;
        this.total_customer_register =  entityOutput ? +entityOutput.total_customer_register : 0 ;
        this.total_customer_save_point = entityOutput ? +entityOutput.total_customer_save_point : 0 ;
        this.total_customer_use_point =  entityOutput ? +entityOutput.total_customer_use_point : 0 ;
        this.total_customer_receiving_gifts = entityOutput ? +entityOutput.total_customer_receiving_gifts : 0 ;
        this.total_orders =  entityOutput ? +entityOutput.total_orders : 0 ;
    }

  
}