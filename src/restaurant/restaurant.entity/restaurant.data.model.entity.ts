import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { RestaurantSetting } from './restaurant.setting';
@Entity()
export class RestaurantDataModel extends BaseEntity { 
            
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    restaurant_name: string;

    @Column({ default: "" })
    brand_name: string;

    @Column({ default: "" })
    name: string;

    @Column({ default: "" })
    email: string;

    @Column({ default: "" })
    phone: string;

    @Column({ default: "" })
    info: string;

    @Column({ default: "" })
    address: string;

    @Column({ default: 0 })
    service_restaurant_level_id: number;

    @Column({ default: 0 })
    is_done_setup: number;

    @Column("text", { array: true })
    setting: RestaurantSetting;

    @Column({ default: 0 })
    is_public: number;

    @Column({ default: "" })
    logo: string;
    
    @Column({ default: "" })
    banner: string;

    @Column("text", { array: true })
    image_urls: string[];

    @Column({ default: 0 })
    status: number;
    

    @Column({ default: 0 })
    total_brands: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}