import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TmsRestaurantBusinessGrowthReportEntity extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    restaurant_id :number;

    @Column()
    restaurant_brand_id :number;

    @Column()
    branch_id :number;

    @Column()
    report_time :string;

    @Column()
    total_revenue :number;

    @Column()
    total_revenue_incremental :number;

    @Column()
    one_ago_total_revenue :number;

    @Column()
    two_ago_total_revenue :number;

    @Column()
    three_ago_total_revenue :number;

    @Column()
    four_ago_total_revenue :number;

    @Column()
    total_cost :number;

    @Column()
    total_cost_recuring_average :number;

    @Column()
    total_salary_average :number;

    @Column()
    total_cost_of_departure :number;

    @Column()
    total_cost_of_departure_detail :number;

    @Column()
    total_cost_final :number;

    @Column()
    total_cost_final_detail :number;

    @Column()
    total_cost_happenning :number;

    @Column()
    one_ago_total_cost :number;

    @Column()
    two_ago_total_cost :number;

    @Column()
    three_ago_total_cost :number;

    @Column()
    four_ago_total_cost :number;

    @Column()
    total_cost_supplier_order_of_departure :number;

    @Column()
    total_cost_supplier_order_of_departure_detail :number;



}