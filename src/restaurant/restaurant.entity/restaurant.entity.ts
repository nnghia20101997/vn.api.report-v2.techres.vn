import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity(
    {
        name: "restaurants",
    }
)

export class Restaurant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ default: 0 })
    service_restaurant_level_id: number;

    @Column({ default: "" })
    server_ip_address: String;

    @Column({ default: "" })
    restaurant_name: String;

    @Column({ default: "" })
    brand_name: String;

    @Column({ default: "" })
    name: String;

    @Column({ default: "" })
    email: String;

    @Column({ default: "" })
    phone: String;

    @Column({ default: "" })
    info: String;

    @Column({ default: "" })
    address: String;

    @Column({ default: 0 })
    restaurant_balance: number;

    @Column({ default: 0 })
    is_done_setup: number;

    @Column("text", { array: true })
    setting: string[];

    @Column({ default: 0 })
    is_public: number;

    @Column({ default: "" })
    domain: String;
    
    @Column({ default: "" })
    api_domain: String;
    
    @Column({ default: 0 })
    status: number;

    @Column({ default: "" })
    greeting_birthday: String;

    @Column({ default: "" })
    greeting_after_meal: String;

    @Column({ default: "" })
    logo: String;

    @Column("text", { array: true })
    image_urls: string[];
    
    @Column({ default: "" })
    banner: String;

    @Column({ default: "" })
    tax_number: String;

    @Column({ default: 0 })
    customer_partner_id: number;

    @Column({ default: "" })
    customer_partner_node_access_token: String;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}