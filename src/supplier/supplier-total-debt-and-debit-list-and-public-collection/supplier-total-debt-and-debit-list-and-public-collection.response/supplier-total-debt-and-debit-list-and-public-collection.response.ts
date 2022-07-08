import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "../supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";
import { SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity } from "../supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.output.entity";

export class SupplierTotalDebtAndDebitListAndPublicCollectionResponse {
  listData: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity[];

  supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity: SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity;

  constructor(
    listData?: SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity[],
    supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity?: SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity
  ) {
    this.listData = listData;
    this.supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity =
      supplierTotalDebtAndDebitListAndPublicCollectionOutputEntity;
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
