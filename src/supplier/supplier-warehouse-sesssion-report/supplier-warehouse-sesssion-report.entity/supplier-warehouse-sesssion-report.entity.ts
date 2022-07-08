import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

/**
 *  Using: sp_g_rp_supplier_warehouse_sesssion_report
 */

@Entity()
export class SupplierWarehouseSesssionReportEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    total_inventory_first: number;

    @Column({ default: 0 })
    total_import: number;

    @Column({ default: 0 })
    total_export: number;

    @Column({ default: 0 })
    total_cancel: number;

    @Column({ default: 0 })
    total_inventory_now: number;

    @Column({ default: 0 })
    total_inventory_first_amount: number;

    @Column({ default: 0 })
    total_import_amount: number;

    @Column({ default: 0 })
    total_export_amount: number;

    @Column({ default: 0 })
    total_cancel_amount: number;

    @Column({ default: 0 })
    total_inventory_now_amount: number;

}