import { SupplierCategoryDetailDataModelEntity } from "../supplier-category-detail.entity/supplier-category-detail.data.model.entity";
import { SupplierCategoryDetailOutputEntity } from "../supplier-category-detail.entity/supplier-category-detail.output.entity";

export class SupplierCategoryDetailOutputResponse {
  listData: SupplierCategoryDetailDataModelEntity[];

   total_record: number = 0;

   export_quantity: number = 0;

   import_quantity: number = 0;

   return_quantity: number = 0;

   remaining_quantity: number = 0;

   total_import_amount: number = 0;

   total_export_amount: number = 0;

   total_return_amount: number = 0;

   total_remaining_amount: number = 0;

  constructor(
    listData: SupplierCategoryDetailDataModelEntity[],
    outPut: SupplierCategoryDetailOutputEntity
  ) {
    this.listData = listData;

    this.total_record = outPut.total_record;
    
    this.export_quantity = outPut.export_quantity;
    
    this.import_quantity = outPut.import_quantity;
    
    this.return_quantity = outPut.return_quantity;
    
    this.remaining_quantity = outPut.remaining_quantity;
    
    this.total_import_amount = outPut.total_import_amount;
    
    this.total_export_amount = outPut.total_export_amount;
    
    this.total_return_amount = outPut.total_return_amount;
    
    this.total_remaining_amount = outPut.total_remaining_amount;
  }
}
