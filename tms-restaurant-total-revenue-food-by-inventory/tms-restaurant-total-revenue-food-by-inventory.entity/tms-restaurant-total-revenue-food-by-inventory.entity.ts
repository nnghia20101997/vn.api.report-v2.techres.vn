import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantTotalRevenueFoodByInventoryReportEntity {
    @PrimaryColumn()
    total_amount: number;
    @Column()
    total_food_material_inventory_amount: number;
    @Column()
    total_food_goods_inventory_amount: number;
}