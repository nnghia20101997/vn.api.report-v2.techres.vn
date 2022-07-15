import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TmsRestaurantOrderExtraChargeReportEntity {
    @PrimaryColumn()
    report_time: string;

    @Column()
    timestamp: string;

    @Column()
    total_amount: number;
}