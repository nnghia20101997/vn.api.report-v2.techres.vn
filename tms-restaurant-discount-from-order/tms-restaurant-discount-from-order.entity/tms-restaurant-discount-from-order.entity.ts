import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TmsRestaurantDiscountFromOrderReportEntity {
    @PrimaryColumn()
    report_time: string
    @Column()
    total_amount: number;
}