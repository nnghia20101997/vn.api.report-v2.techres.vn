import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminAdvertisingRevenueEntity {
    @PrimaryColumn()
    report_time: number;

    @Column({ default: 0 })
    total_price: number;

    @Column({ default: "" })
    report_day: string;
}