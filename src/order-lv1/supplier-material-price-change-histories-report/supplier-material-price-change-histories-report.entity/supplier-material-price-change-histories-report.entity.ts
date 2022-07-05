import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class SupplierMaterialPriceChangeHistoriesReportEntity{

    @PrimaryColumn()
    id: number;

    @Column()
    supplier_id: number;

    @Column()
    supplier_name : string;

    @Column()
    supplier_material_id: number;

    @Column()
    supplier_material_name : string ; 

    @Column()
    restaurant_id : number ;
     
    @Column()
    restaurant_brand_id : number ;

    @Column()
    branch_id : number ;

    @Column()
    total_new_price : number ;

    @Column()
    total_old_price : number ;

    @Column()
    total_price_difference : number ;

    @Column()
    created_at : string ; 


}