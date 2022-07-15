import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantDetailFoodReportEntity {
    @PrimaryColumn()
    order_id: number;
    @Column()
    employee_id: number;
    @Column()
    employee_name: string;
    @Column()
    food_id: number;
    @Column()
    food_name: string;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @Column()
    total_amount: number;
    @Column()
    unit_name: string;
    @Column()
    day: string;
    @Column()
    table_id: number;
    @Column()
    table_name: string;
    @Column()
    customer_slot_number: number;

}