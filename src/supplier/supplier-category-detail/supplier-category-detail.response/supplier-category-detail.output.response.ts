import { SupplierCategoryDetailDataModelEntity } from "../supplier-category-detail.entity/supplier-category-detail.data.model.entity";
import { SupplierCategoryDetailOutputEntity } from "../supplier-category-detail.entity/supplier-category-detail.output.entity";

export class SupplierCategoryDetailOutputResponse {
  listData: SupplierCategoryDetailDataModelEntity[];

  outPut: SupplierCategoryDetailOutputEntity;

  constructor(
    listData: SupplierCategoryDetailDataModelEntity[],
    outPut: SupplierCategoryDetailOutputEntity
  ) {
    this.listData = listData;
    this.outPut = outPut;
  }
}
