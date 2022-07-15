import { TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from "../tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity/tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity";

export class TmsRestaurantRevenueCostCustomerByRestaurantBrandReportResponse {
    restaurant_id: number;

    restaurant_brand_id: number;

    branch_id: number;

    total_revenue_amount_sell: number;

    total_revenue_amount_debt: number;

    total_revenue_amount_paided: number;

    total_revenue_amount_waiting: number;

    total_customer_slot_number_complete: number;

    total_customer_slot_number_not_complete: number;

    total_profit_amount_confirm: number;

    total_profit_amount_not_confirm: number;

    total_revenue_amount_deposit: number;

    constructor(baseEntity?: TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity) {
        this.restaurant_id = baseEntity? +baseEntity.restaurant_id : 0;
        this.restaurant_brand_id = baseEntity? +baseEntity.restaurant_brand_id : 0;
        this.branch_id = baseEntity? +baseEntity.branch_id : 0;
        this.total_revenue_amount_sell = baseEntity? +baseEntity.total_revenue_amount_sell : 0;
        this.total_revenue_amount_debt = baseEntity? +baseEntity.total_revenue_amount_debt : 0;
        this.total_revenue_amount_paided = baseEntity? +baseEntity.total_revenue_amount_paided : 0;
        this.total_revenue_amount_waiting = baseEntity? +baseEntity.total_revenue_amount_waiting : 0;
        this.total_customer_slot_number_complete = baseEntity? +baseEntity.total_customer_slot_number_complete : 0;
        this.total_customer_slot_number_not_complete = baseEntity? +baseEntity.total_customer_slot_number_not_complete : 0;
        this.total_profit_amount_confirm = baseEntity? +baseEntity.total_profit_amount_confirm : 0;
        this.total_profit_amount_not_confirm = baseEntity? +baseEntity.total_profit_amount_not_confirm : 0;
        this.total_revenue_amount_deposit = baseEntity? +baseEntity.total_revenue_amount_deposit : 0;
    }

    public mapToList(baseEntities: TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity[]): TmsRestaurantRevenueCostCustomerByRestaurantBrandReportResponse[] {
        let data: TmsRestaurantRevenueCostCustomerByRestaurantBrandReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantRevenueCostCustomerByRestaurantBrandReportResponse(e))
        });

        return data;
    }
}