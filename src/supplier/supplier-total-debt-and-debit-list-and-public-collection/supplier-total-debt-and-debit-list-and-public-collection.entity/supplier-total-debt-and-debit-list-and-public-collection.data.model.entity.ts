import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity {
  @PrimaryColumn()
  restaurant_id: number;

  @Column({ default: "" })
  restaurant_name: string;

  @Column({ default: 0 })
  debt_amount: number;

  @Column({ default: "" })
  code: string;
}
