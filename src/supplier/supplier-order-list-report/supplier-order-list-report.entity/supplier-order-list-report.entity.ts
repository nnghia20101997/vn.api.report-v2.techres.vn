import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 *  Using: sp_g_rp_supplier_order_list_report
 */

@Entity()
export class SupplierOrderListReportEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    supplier_id: number;

    @Column({ default: 0 })
    is_order: number;

    @Column({ default: 0 })
    restaurant_id: number;

    @Column({ default: "" })
    restaurant_name: string;

    @Column({ default: 0 })
    branch_id: number;

    @Column({ default: "" })
    branch_name: string;

    @Column({ default: 0 })
    total_material: number;

    @Column({ default: 0 })
    total_vat_amount: number;

    @Column({ default: 0 })
    total_discount_amount: number;

    @Column({ default: 0 })
    total_amount: number;

    @Column({ default: 0 })
    order_status: number;

    @Column({ default: "" })
    delivery_time: string;

}