import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { SupplierOrderTotalOrderByTimeDataModelEntity } from "./supplier-order-total-order-by-time.entity/supplier-order-total-order-by-time.data.model.entity";

@Injectable()
export class SupplierOrderTotalOrderByTimeService {
  constructor(
    @InjectRepository(SupplierOrderTotalOrderByTimeDataModelEntity)
    private supplierOrderTotalOrderByTimeDataModelEntity: Repository<SupplierOrderTotalOrderByTimeDataModelEntity>
  ) {}

  /**
   *@param supplierId
   * @param fromDate
   * @param toDate
   * @returns
   */

  async spGRpSupplierOrderTotalOrderByTime(
    supplierId: number,
    fromDate: string,
    toDate: string
  ): Promise<SupplierOrderTotalOrderByTimeDataModelEntity> {
    let result = await this.supplierOrderTotalOrderByTimeDataModelEntity.query(
      "CALL sp_g_rp_supplier_order_total_order_by_time(?,?,?,@status,@message); SELECT @status AS status , @message AS message",
      [supplierId, fromDate, toDate]
    );
    console.log(supplierId,fromDate,toDate);
    
    ExceptionStoreProcedure.validate(result);
    let data: SupplierOrderTotalOrderByTimeDataModelEntity =
      new StoreProcedureResult<SupplierOrderTotalOrderByTimeDataModelEntity>().getResultDetail(
        result
      );

    return data;
  }
}
