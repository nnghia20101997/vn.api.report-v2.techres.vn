import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantRevenueCostProfitEstimateEntity {

    @PrimaryColumn()
    total_revenue: number;

    @Column()
    total_cost: number;

    @Column()
    total_profit: number;

    @Column()
    report_time: string;
}