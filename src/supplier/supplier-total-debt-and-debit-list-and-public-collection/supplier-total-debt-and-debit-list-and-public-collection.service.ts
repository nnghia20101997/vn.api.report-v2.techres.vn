import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResultOutput } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "./supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";
import { SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity } from "./supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.output.entity";

@Injectable()
export class SupplierTotalDebtAndDebitListAndPublicCollectionService {
  constructor(
    @InjectRepository(
      SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity
    )
    private supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity: Repository<SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity>
  ) {}

  /**
   *@param supplierId
   * @param fromDate
   * @param toDate
   * @param keySearch
   * @param debtType
   * @param _offset
   * @param _limit
   * @returns
   */

  async spGRpSupplierTotalDebtAndDebitListAndPublicCollection(
    supplierId: number,
    fromDate: string,
    toDate: string,
    keySearch: string,
    debtType: number,
    _offset: number,
    _limit: number
  ): Promise<
    StoreProcedureOutputResultInterface<
      SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity,object >
  > {
    let result =
      await this.supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.query(
        "CALL sp_g_rp_supplier_total_debt_and_debit_list_and_public_collection(?,?,?,?,?,?,?,@total_to_pay_debt_amount, @total_receivable_debt_amount, @status, @message); SELECT @total_to_pay_debt_amount AS total_to_pay_debt_amount , @total_receivable_debt_amount AS total_receivable_debt_amount , @status AS status_code , @message AS message_error",
        [supplierId, fromDate, toDate, keySearch, debtType, _offset, _limit]
      );
      ExceptionStoreProcedure.validate(result);

    let data: StoreProcedureOutputResultInterface<
      SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity,
      SupplierTotalDebtAndDebitListAndPublicCollectionOutputEntity
    > = new StoreProcedureResultOutput<SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity>().getResultOutputList(
      result
    );

    return data;
  }
}
