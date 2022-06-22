import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RestaurantBrandBusinessTypeDataModel } from "./restaurant-brand-business-type.entity";
import { RestaurantBrandSetting } from "./restaurant-brand.setting";

@Entity()
export class RestaurantBrandDataModel extends BaseEntity { 
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    restaurant_id: number;

    @Column({ default: 0 })
    customer_partner_id: number;

    @Column({ default: "" })
    name: string;

    @Column({ default: "" })
    logo_url: string;

    @Column({ default: "" })
    banner: string;

    @Column({ default: "" })
    description: string;

    @Column("text", { array: true })
    setting: string;

    @Column("text", { array: true })
    restaurant_brand_business_type: string;

    @Column({ default: 0 })
    status: number;

    @Column({ default: 0 })
    total_branches: number;

    @Column({ default: 0 })
    service_restaurant_level_id: number;

    @Column({ default: 0 })
    service_restaurant_level_type: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;




 				
}