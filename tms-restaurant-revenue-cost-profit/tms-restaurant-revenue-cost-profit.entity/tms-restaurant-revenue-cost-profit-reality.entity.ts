import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantRevenueCostProfitRealityEntity {
    @PrimaryColumn()
    restaurant_id: number;

    @Column()
    restaurant_brand_id: number;

    @Column()
    branch_id: number;

    @Column()
    total_revenue: number;

    @Column()
    total_cost: number;

    @Column()
    total_profit: number;

    @Column()
    big_total_revenue: number;

    @Column()
    big_total_cost: number;

    @Column()
    big_total_profit: number;
    
    @Column()
    report_time: number;
}