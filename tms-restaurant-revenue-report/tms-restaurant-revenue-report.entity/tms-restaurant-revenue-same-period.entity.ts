import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantRevenueSamePeriodReportEntity { 

    @PrimaryColumn()
    report_time: number;

    @Column()
    restaurant_id: number;

    @Column()
    restaurant_brand_id: number;

    @Column()
    branch_id: number;

    @Column()
    total_revenue: number;

    @Column()
    rate_revenue_same_period: number;

    @Column()
    report_current_time: string;

    @Column()
    total_current_revenue: number;
    
}