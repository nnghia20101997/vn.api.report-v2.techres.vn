import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "../supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";
import { SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity } from "../supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.output.entity";
import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelResponse } from "./supplier-total-debt-and-debit-list-and-public-collection.data.model.response";

export class SupplierTotalDebtAndDebitListAndPublicCollectionResponse {
  list_data: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelResponse[];

  total_record: number = 0;
  total_to_pay_debt_amount: number = 0;
  total_receivable_debt_amount: number = 0;

  constructor(
    supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity?: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity[],
    supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity?: SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity
  ) {
    this.list_data =
      new SupplierTotalDebtAndDebitListAndPublicCollectionDataModelResponse().mapToList(
        supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity
      );

    this.total_record =
      supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity
        ? +supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity.total_record
        : 0;
    this.total_to_pay_debt_amount =
      supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity
        ? +supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity.total_to_pay_debt_amount
        : 0;
    this.total_receivable_debt_amount =
      supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity
        ? +supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity.total_receivable_debt_amount
        : 0;
  }
}
