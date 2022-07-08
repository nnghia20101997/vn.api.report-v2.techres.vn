import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 *  Using: sp_g_rp_supplier_revenue_by_time
 */

@Entity()
export class SupplierRevenueReportEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    report_time: string;

    @Column({ default: 0 })
    supplier_revenue: number;

    @Column({ default: 0 })
    supplier_cost: number;

    @Column({ default: 0 })
    supplier_profit: number;

}