import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TmsRestaurantSummaryFoodRevenueByTimeReportEntity {
    @PrimaryColumn()
    report_time: string;
    @Column()
    timestamp: string;
    @Column()
    total_original_amount: number;
    @Column()
    total_amount: number;
    @Column()
    profit: number;
    @Column()
    profit_ratio: number;
    @Column()
    total_quantity: number;
}