import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResultOutput } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { SupplierCategoryDetailDataModelEntity } from "./supplier-category-detail.entity/supplier-category-detail.data.model.entity";
import { SupplierCategoryDetailOutputEntity } from "./supplier-category-detail.entity/supplier-category-detail.output.entity";

@Injectable()
export class SupplierCategoryDetailService {
  constructor(
    @InjectRepository(SupplierCategoryDetailDataModelEntity)
    private supplierCategoryDetailDataModelEntity: Repository<SupplierCategoryDetailDataModelEntity>
  ) {}

  /**
   *
   * @param supplierId
   *  @param materialCategorieId
   *  @param fromDate
   *  @param toDate
   *  @param _limit
   *  @param _offset
   * @returns
   */

  async spGRpSupplierCategoryDetail(
    supplierId: number,
    materialCategorieId: number,
    fromDate: string,
    toDate: string,
    _limit: number,
    _offset: number
  ): Promise<
    StoreProcedureOutputResultInterface<SupplierCategoryDetailDataModelEntity, object>
  > {
    let result = await this.supplierCategoryDetailDataModelEntity.query(
      "CALL sp_g_rp_supplier_category_detail(?,?,?,?,?,?,@import_quantity,@export_quantity,@return_quantity,@remaining_quantity,@total_import_amount,@total_export_amount,@total_return_amount,@total_remaining_amount,@total_record,@status,@message); SELECT @import_quantity AS import_quantity, @export_quantity AS export_quantity, @return_quantity AS return_quantity, @remaining_quantity AS remaining_quantity, @total_import_amount AS total_import_amount, @total_export_amount AS total_export_amount, @total_return_amount AS total_return_amount, @total_remaining_amount AS total_remaining_amount, @total_record AS total_record,@status AS status_code , @message AS message_error",
      [supplierId,materialCategorieId,fromDate,toDate,_limit,_offset]
    );
    ExceptionStoreProcedure.validate(result);

    let data: StoreProcedureOutputResultInterface<
    SupplierCategoryDetailDataModelEntity,
    SupplierCategoryDetailOutputEntity
    > = new StoreProcedureResultOutput<SupplierCategoryDetailDataModelEntity>().getResultOutputList(
      result
    );

    return data;
  }
}
