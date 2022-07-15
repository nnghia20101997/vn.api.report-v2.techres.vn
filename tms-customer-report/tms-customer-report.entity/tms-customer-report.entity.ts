import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsCustomerReportEntity extends BaseEntity{
    @PrimaryColumn()
    report_time: string;

    @Column({ default: 0 })
    total_customer_register: number;

    @Column({ default: 0 })
    total_customer_save_point: number;

    @Column({ default: 0 })
    total_customer_go_to_restaurant: number;

    @Column({ default: 0 })
    total_customer_use_point: number;

    @Column({ default: 0 })
    total_customer_receiving_gifts: number;

    @Column({ default: 0 })
    total_orders: number;
		
}