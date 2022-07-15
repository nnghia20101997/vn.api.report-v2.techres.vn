import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TmsRestaurantRevenueByAreaReportEntity {
    @PrimaryColumn()
    area_id: number;
    @Column()
    area_name: number;
    @Column()
    order_count: number;
    @Column()
    revenue: number;
}