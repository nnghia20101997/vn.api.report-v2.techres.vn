import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantRevenueByFoodReportEntity {
    @PrimaryColumn()
    food_id: number;
    @Column()
    food_name: string;
    @Column()
    food_avatar: string;
    @Column()
    food_avatar_thump: string;
    @Column()
    category_id: number;
    @Column()
    category_name: string;
    @Column()
    category_type: number;
    @Column()
    unit_name: string;
    @Column()
    quantity: number;
    @Column()
    original_price: number;
    @Column()
    price: number;
    @Column()
    total_original_amount: number;
    @Column()
    total_amount: number;
    @Column()
    profit:number;
    @Column()
    profit_ratio: number;
}