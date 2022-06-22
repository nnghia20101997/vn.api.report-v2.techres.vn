import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BranchDataModel extends BaseEntity { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    name: string;

    @Column({ default: "" })
    phone: string;

    @Column({ default: "" })
    address: string;

    @Column({ default: 0 })
    status: number;

    @Column({ default: 0 })
    is_public: number;

    @Column({ default: 0 })
    is_office: number;

    @Column({ default: 0 })
    employee_manager_id: number;

    @Column({ default: 0 })
    enable_checkin: number;
    
    @Column({ default: "" })
    qr_code_checkin: string;

    @Column({ default: "" })
    image_logo: string;

    @Column({ default: "" })
    banner: string;

    @Column({ default: 0 })
    is_allow_advert: number;

    @Column({ default: 0 })
    is_enable_booking: number;

    @Column({ default: 0 })
    is_have_take_away: number;

    @Column({ default: 0 })
    is_working_offline: number;

    @Column({ default: 0 })
    restaurant_brand_id: number;

    @Column({ default: 0 })
    employee_id: number;

    @Column({ default: "" })
    employee_manager_full_name: string;
     
    @CreateDateColumn()
    created_at: Date;

}