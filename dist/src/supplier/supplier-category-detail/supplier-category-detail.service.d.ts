import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { SupplierCategoryDetailDataModelEntity } from "./supplier-category-detail.entity/supplier-category-detail.data.model.entity";
export declare class SupplierCategoryDetailService {
    private supplierCategoryDetailDataModelEntity;
    constructor(supplierCategoryDetailDataModelEntity: Repository<SupplierCategoryDetailDataModelEntity>);
    spGRpSupplierCategoryDetail(supplierId: number, materialCategorieId: number, fromDate: string, toDate: string, _limit: number, _offset: number): Promise<StoreProcedureOutputResultInterface<SupplierCategoryDetailDataModelEntity, object>>;
}
