import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "../supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";

export class SupplierTotalDebtAndDebitListAndPublicCollectionDataModelResponse {
  restaurant_id: number;

  restaurant_name: string;

  debt_amount: number;

  code: string;

  constructor(
    supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity?: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity
  ) {
    this.restaurant_id =
      supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity
        ? +supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.restaurant_id
        : 0;
    this.restaurant_name =
      supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity
        ? supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.restaurant_name
        : "";
    this.debt_amount =
      supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity
        ? +supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.debt_amount
        : 0;
    this.code = supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity
      ? supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.code
      : "";
  }

  public mapToList(
    data: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity[]
  ) {
    let response: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelResponse[] =
      [];
    data.forEach((e) => {
      response.push(
        new SupplierTotalDebtAndDebitListAndPublicCollectionDataModelResponse(e)
      );
    });
    return response;
  }
}
