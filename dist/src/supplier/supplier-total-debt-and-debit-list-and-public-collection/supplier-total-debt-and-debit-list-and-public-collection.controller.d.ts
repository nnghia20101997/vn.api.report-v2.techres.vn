import { Response } from "express";
import { SupplierTotalDebtAndDebitListAndPublicCollectionQueryDTO } from "./supplier-total-debt-and-debit-list-and-public-collection.query.dto/supplier-total-debt-and-debit-list-and-public-collection.query.dto";
import { SupplierTotalDebtAndDebitListAndPublicCollectionService } from "./supplier-total-debt-and-debit-list-and-public-collection.service";
export declare class SupplierTotalDebtAndDebitListAndPublicCollectionController {
    private SupplierTotalDebtAndDebitListAndPublicCollectionService;
    constructor(SupplierTotalDebtAndDebitListAndPublicCollectionService: SupplierTotalDebtAndDebitListAndPublicCollectionService);
    spGRpSupplierTotalDebtAndDebitListAndPublicCollection(supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO: SupplierTotalDebtAndDebitListAndPublicCollectionQueryDTO, res: Response): Promise<any>;
}
