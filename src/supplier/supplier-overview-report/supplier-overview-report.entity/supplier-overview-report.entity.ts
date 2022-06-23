import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class SupplierOverviewReportEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    supplier_id: number;

    @Column({ default: 0 })
    total_order: number;

    @Column({ default: 0 })
    order_delivered : number;

    @Column({ default: 0 })
    order_not_delivered: number;

    @Column({ default: 0 })
    order_processing: number;

    @Column({ default: 0 })
    order_return: number;

    @Column({ default: 0 })
    total_order_complete_amount: number;

    @Column({ default: 0 })
    total_payment_amount: number;

    @Column({ default: 0 })
    total_order_amount: number;

    @Column({ default: 0 })
    debt_amount: number;

    @Column({ default: 0 })
    waiting_confirm: number;

   

}