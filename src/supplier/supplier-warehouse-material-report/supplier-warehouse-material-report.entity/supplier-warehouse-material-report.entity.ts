import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

/**
 *  Using: sp_g_rp_supplier_warehouse_material_report
 */

@Entity()
export class SupplierWarehouseMaterialReportEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    supplier_material_id: number;

    @Column({ default: 0 })
    supplier_id: number;

    @Column({ default: 0 })
    material_category_id: number;

    @Column({ default: "" })
    material_category_name: string;

    @Column({ default: "" })
    supplier_material_name: string;

    @Column({ default: "" })
    supplier_material_code: string;

    @Column({ default: "" })
    unit_full_name: string;

    @Column({ default: 0 })
    total_import: number;

    @Column({ default: 0 })
    total_export: number;

    @Column({ default: 0 })
    total_return: number;

    @Column({ default: 0 })
    quantity_export: number;

    @Column({ default: 0 })
    quantity_import: number;

    @Column({ default: 0 })
    quantity_return: number;

    @Column({ default: 0 })
    quantity_remaining: number;

    @Column({ default: 0 })
    total_remaining: number;

}