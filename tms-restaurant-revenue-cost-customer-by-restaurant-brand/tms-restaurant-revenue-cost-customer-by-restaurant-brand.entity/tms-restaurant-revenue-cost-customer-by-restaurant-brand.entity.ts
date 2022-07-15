import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity {
    @PrimaryColumn()
    restaurant_id: number;
    @Column()
    restaurant_brand_id: number;
    @Column()
    branch_id: number;
    @Column()
    total_revenue_amount_sell: number;
    @Column()
    total_revenue_amount_debt: number;
    @Column()
    total_revenue_amount_paided: number;
    @Column()
    total_revenue_amount_waiting: number;
    @Column()
    total_customer_slot_number_complete: number;
    @Column()
    total_customer_slot_number_not_complete: number;
    @Column()
    total_profit_amount_confirm: number;
    @Column()
    total_profit_amount_not_confirm: number;
    @Column()
    total_revenue_amount_deposit: number;

}