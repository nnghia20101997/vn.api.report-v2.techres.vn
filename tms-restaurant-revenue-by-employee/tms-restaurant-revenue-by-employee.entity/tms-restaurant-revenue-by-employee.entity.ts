import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TmsRestaurantRevenueByEmployeeReportEntity {
    @PrimaryColumn()
    employee_id: number;
    @Column()
    avatar: string;
    @Column()
    username: string;
    @Column()
    employee_name: string;
    @Column()
    employee_role_name: string;
    @Column()
    order_count: number;
    @Column()
    revenue: number;
}