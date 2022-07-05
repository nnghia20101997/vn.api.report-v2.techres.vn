import { Response } from "express";
import { SupplierCategoryDetailQueryDTO } from "./supplier-category-detail.dto/supplier-category-detail.query.dto";
import { SupplierCategoryDetailService } from "./supplier-category-detail.service";
export declare class SupplierCategoryDetailController {
    private supplierCategoryDetailService;
    constructor(supplierCategoryDetailService: SupplierCategoryDetailService);
    spGRpSupplierCategoryDetail(supplierCategoryDetailQueryDTO: SupplierCategoryDetailQueryDTO, res: Response): Promise<any>;
}
