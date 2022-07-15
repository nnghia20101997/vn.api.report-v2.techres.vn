import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TmsRestaurantRevenueByCategoryReportEntity {
    @PrimaryColumn()
    category_id: number;
    @Column()
    category_name: string;
    @Column()
    total_amount: number;
    @Column()
    total_original_amount: number;
    @Column()
    profit: number;
    @Column()
    profit_ratio: number;


}