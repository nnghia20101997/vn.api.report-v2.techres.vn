import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from "../current-day-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity";

export class RestaurantRevenueCostCustomerByRestaurantBrandReportResponse {

    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id : number ; 

    total_revenue_amount_sell: number;

    total_revenue_amount_debt: number;
  
    total_revenue_amount_paided: number;

    total_revenue_amount_waiting: number;

    total_customer_slot_number_complete: number;
  
    total_customer_slot_number_not_complete: number;

    total_profit_amount_confirm: number;

    total_profit_amount_not_confirm: number;
  
    total_revenue_amount_deposit: number;
   
    constructor(
        entity ?: RestaurantRevenueCostCustomerByRestaurantBrandReportEntity
    ) {
     this.restaurant_id = entity ? +entity.restaurant_id : 0 ;
     this.restaurant_brand_id =  entity ? +entity.restaurant_brand_id : 0 ;
     this.branch_id =  entity ? +entity.branch_id : 0 ;
     this.total_revenue_amount_sell = entity ? +entity.total_revenue_amount_sell : 0 ;
     this.total_revenue_amount_debt = entity ? +entity.total_revenue_amount_debt : 0 ;
     this.total_revenue_amount_paided = entity ? +entity.total_revenue_amount_paided : 0 ;
     this.total_revenue_amount_waiting = entity ? +entity.total_revenue_amount_waiting : 0 ;
     this.total_customer_slot_number_complete = entity ? +entity.total_customer_slot_number_complete : 0 ;
     this.total_customer_slot_number_not_complete = entity ? +entity.total_customer_slot_number_not_complete : 0 ;
     this.total_profit_amount_confirm = entity ? +entity.total_profit_amount_confirm : 0 ;
     this.total_profit_amount_not_confirm = entity ? +entity.total_profit_amount_not_confirm : 0 ;
     this.total_revenue_amount_deposit = entity ? +entity.total_revenue_amount_deposit : 0 ;
  
    }
  
    // public mapToList(data: AdminAdvertisingRevenueDetailDataModelEntity[]) {
    //   let response: AdminAdvertisingRevenueDetailResponse[] = [];
    //   data.forEach((e) => {
    //     response.push(new AdminAdvertisingRevenueDetailResponse(e));
    //   });
    //   return response;
    // }
  }