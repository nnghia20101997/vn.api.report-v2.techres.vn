import { SupplierCategoryDetailDataModelEntity } from "../supplier-category-detail.entity/supplier-category-detail.data.model.entity";
import { SupplierCategoryDetailOutputEntity } from "../supplier-category-detail.entity/supplier-category-detail.output.entity";
import { SupplierCategoryDetailDataModelResponse } from "./supplier-category-detail.data.model.response";

export class SupplierCategoryDetailResponse {
    list_data: SupplierCategoryDetailDataModelResponse[];
  
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
      supplierCategoryDetailDataModelEntity: SupplierCategoryDetailDataModelEntity[],
      supplierCategoryDetailOutputEntity: SupplierCategoryDetailOutputEntity
    ) {
      this.list_data = new SupplierCategoryDetailDataModelResponse().mapToList(supplierCategoryDetailDataModelEntity);
  
      this.total_record = supplierCategoryDetailOutputEntity.total_record;
      
      this.export_quantity = supplierCategoryDetailOutputEntity.export_quantity;
      
      this.import_quantity = supplierCategoryDetailOutputEntity.import_quantity;
      
      this.return_quantity = supplierCategoryDetailOutputEntity.return_quantity;
      
      this.remaining_quantity = supplierCategoryDetailOutputEntity.remaining_quantity;
      
      this.total_import_amount = supplierCategoryDetailOutputEntity.total_import_amount;
      
      this.total_export_amount = supplierCategoryDetailOutputEntity.total_export_amount;
      
      this.total_return_amount = supplierCategoryDetailOutputEntity.total_return_amount;
      
      this.total_remaining_amount = supplierCategoryDetailOutputEntity.total_remaining_amount;
    }
  }
  