import { SupplierCategoryDetailDataModelEntity } from "../supplier-category-detail.entity/supplier-category-detail.data.model.entity";
import { SupplierCategoryDetailOutputEntity } from "../supplier-category-detail.entity/supplier-category-detail.output.entity";

export class SupplierCategoryDetailDataModelResponse {
  code: string;

  name: string;

  total_import: number;

  total_export: number;

  total_return: number;

  quantity_export: number;

  quantity_import: number;

  quantity_return: number;

  quantity_remaining: number;

  total_remaining: number;

  
  constructor(
    supplierCategoryDetailDataModelEntity?: SupplierCategoryDetailDataModelEntity
  ) {
    this.code = supplierCategoryDetailDataModelEntity
      ? supplierCategoryDetailDataModelEntity.code
      : "";
      this.name = supplierCategoryDetailDataModelEntity
      ? supplierCategoryDetailDataModelEntity.name
      : "";
    this.total_import = supplierCategoryDetailDataModelEntity
      ? +supplierCategoryDetailDataModelEntity.total_import
      : 0;
    this.total_return = supplierCategoryDetailDataModelEntity
      ? +supplierCategoryDetailDataModelEntity.total_return
      : 0;
      this.quantity_export = supplierCategoryDetailDataModelEntity
      ? +supplierCategoryDetailDataModelEntity.quantity_export
      : 0;
      this.quantity_import = supplierCategoryDetailDataModelEntity
      ? +supplierCategoryDetailDataModelEntity.quantity_import
      : 0;
      this.quantity_return = supplierCategoryDetailDataModelEntity
      ? +supplierCategoryDetailDataModelEntity.quantity_return
      : 0;
      this.quantity_remaining = supplierCategoryDetailDataModelEntity
      ? +supplierCategoryDetailDataModelEntity.quantity_remaining
      : 0;
      this.total_remaining = supplierCategoryDetailDataModelEntity
      ? +supplierCategoryDetailDataModelEntity.total_remaining
      : 0;
  }

  public mapToList(data: SupplierCategoryDetailDataModelEntity[]) {
    let response: SupplierCategoryDetailDataModelResponse[] = [];
    data.forEach((e) => {
      response.push(new SupplierCategoryDetailDataModelResponse(e));
    });
    return response;
  }
}
