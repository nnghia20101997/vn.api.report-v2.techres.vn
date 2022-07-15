import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantRevenueReportEntity extends BaseEntity{
    @PrimaryColumn()
    report_time: string;

    @Column({ default: 0 })
    restaurant_id: number;

    @Column({ default: 0 })
    restaurant_brand_id: number;

    @Column({ default: 0 })
    branch_id: number;

    @Column({ default: 0 })
    total_revenue: number;

    @Column({ default: 0 })
    total_order: number;

		
}