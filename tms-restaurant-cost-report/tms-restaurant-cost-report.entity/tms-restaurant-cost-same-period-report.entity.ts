import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantCostSamePeriodReportEntity {
    
    @PrimaryColumn()
    report_time: string;

    @Column()
    restaurant_id: number;

    @Column()
    restaurant_brand_id: number;

    @Column()
    branch_id: number;
    
    @Column()
    total_cost: number;

    @Column()
    rate_cost_same_period: number;

    @Column()
    total_current_cost: number;
    
    @Column()
    report_current_time: number;
   
}