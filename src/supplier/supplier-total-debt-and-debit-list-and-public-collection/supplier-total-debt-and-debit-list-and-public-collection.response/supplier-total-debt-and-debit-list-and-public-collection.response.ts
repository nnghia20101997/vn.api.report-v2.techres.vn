import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "../supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";
import { SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity } from "../supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.output.entity";

export class SupplierTotalDebtAndDebitListAndPublicCollectionResponse {
  listData: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity[];

  total_to_pay_debt_amount: number = 0;
  total_receivable_debt_amount: number = 0;

  constructor(
    listData?: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity[],
    supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity?: SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity
  ) {
    this.listData = listData;

    this.total_to_pay_debt_amount =
      supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity.total_to_pay_debt_amount;

    this.total_receivable_debt_amount =
      supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity.total_receivable_debt_amount;
  }

  //   public mapToList(
  //     data: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity[]
  //   ) {
  //     let response: SupplierTotalDebtAndDebitListAndPublicCollectionResponse[] =
  //       [];
  //     data.forEach((e) => {
  //       response.push(
  //         new SupplierTotalDebtAndDebitListAndPublicCollectionResponse(e)
  //       );
  //     });
  //     return response;
  //   }
}
