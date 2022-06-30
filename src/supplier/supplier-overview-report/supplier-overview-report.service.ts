import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { SupplierOverviewReportEntity } from "./supplier-overview-report.entity/supplier-overview-report.entity";

@Injectable()
export class SupplierOverviewReportService {
  constructor(
    @InjectRepository(SupplierOverviewReportEntity)
    private salePost: Repository<SupplierOverviewReportEntity>
  ) {}

  /**
   *
   * @param supplierId
   * @param restaurantId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
  async spGRpSupplierOverviewReport(
    supplierId: number,
    restaurantId: number,
    branchId: number,
    fromDateString: string,
    toDateString: string
  ): Promise<SupplierOverviewReportEntity> {
    let result = await this.salePost.query(
      "CALL sp_g_rp_supplier_overview_report(?, ?, ?, ?, ?,@status,@message); SELECT @status AS status , @message AS message",
      [supplierId, restaurantId, branchId, fromDateString, toDateString]
    );
    ExceptionStoreProcedure.validate(result);
    let data: SupplierOverviewReportEntity =
      new StoreProcedureResult<SupplierOverviewReportEntity>().getResultDetail(
        result
      );

    return data;
  }
}
