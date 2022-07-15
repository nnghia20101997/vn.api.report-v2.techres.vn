import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantCostAdjacentReportEntity extends BaseEntity{
    @PrimaryColumn()
    restaurant_id: number;

    @Column()
    restaurant_brand_id: number;

    @Column()
    branch_id: number;

    @Column()
    total_cost: number;
    
    @Column()
    report_time: string;

    @Column()
    rate_cost_adjacent : number;

    @Column()
    report_current_time:string;

    @Column()
    total_current_cost : number;
}