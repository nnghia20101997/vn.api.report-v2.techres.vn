import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class SupplierCategoryDetailDataModelEntity {
    @PrimaryColumn()
    code: string;

    @Column({ default: "" })
    name: string;

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
  