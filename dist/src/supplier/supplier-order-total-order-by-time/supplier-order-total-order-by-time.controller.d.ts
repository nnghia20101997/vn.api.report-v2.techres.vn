import { Response } from "express";
import { SupplierOrderTotalOrderByTimeQueryDTO } from "./supplier-order-total-order-by-time.dto/supplier-order-total-order-by-time.query.dto";
import { SupplierOrderTotalOrderByTimeService } from "./supplier-order-total-order-by-time.service";
export declare class SupplierOrderTotalOrderByTimeRController {
    private supplierOrderTotalOrderByTimeService;
    constructor(supplierOrderTotalOrderByTimeService: SupplierOrderTotalOrderByTimeService);
    spGRpAdminSalerDetailReport(supplierOrderTotalOrderByTimeQueryDTO: SupplierOrderTotalOrderByTimeQueryDTO, res: Response): Promise<any>;
}
