import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class RestaurantBrandBusinessTypeDataModel extends BaseEntity { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    name: string;
    
    @Column({ default: "" })
    description: string;

    @Column({ default: 0 })
    is_hidden: number;

    @Column({ default: "" })
    created_at: string;

    @Column({ default: "" })
    updated_at: string;

}