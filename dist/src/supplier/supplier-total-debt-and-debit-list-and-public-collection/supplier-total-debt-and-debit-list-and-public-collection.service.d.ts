import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "./supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";
export declare class SupplierTotalDebtAndDebitListAndPublicCollectionService {
    private supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity;
    constructor(supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity: Repository<SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity>);
    spGRpSupplierTotalDebtAndDebitListAndPublicCollection(supplierId: number, fromDate: string, toDate: string, keySearch: string, debtType: number, _offset: number, _limit: number): Promise<StoreProcedureOutputResultInterface<SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity, object>>;
}
