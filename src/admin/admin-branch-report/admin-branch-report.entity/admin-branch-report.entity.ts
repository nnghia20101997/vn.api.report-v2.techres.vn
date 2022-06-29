import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class AdminBranchReporDataModelEntity {
    @PrimaryColumn()
    id: number;

    @Column({ default: "" })
    name: string;

    @Column({ default: "" })
    phone_number: string;

    @Column({ default: "" })
    address_full_text: string;
    
}