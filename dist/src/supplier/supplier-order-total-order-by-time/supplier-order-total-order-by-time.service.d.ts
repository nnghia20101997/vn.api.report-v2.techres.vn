import { Repository } from "typeorm";
import { SupplierOrderTotalOrderByTimeDataModelEntity } from "./supplier-order-total-order-by-time.entity/supplier-order-total-order-by-time.data.model.entity";
export declare class SupplierOrderTotalOrderByTimeService {
    private supplierOrderTotalOrderByTimeDataModelEntity;
    constructor(supplierOrderTotalOrderByTimeDataModelEntity: Repository<SupplierOrderTotalOrderByTimeDataModelEntity>);
    spGRpSupplierOrderTotalOrderByTime(supplierId: number, fromDate: string, toDate: string): Promise<SupplierOrderTotalOrderByTimeDataModelEntity>;
}
