import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminAdvertisingRevenueEntity } from "./admin-advertising-revenue.entity/admin-advertising-revenue.entity";

@Injectable()
export class AdminAdvertisingRevenueService {
  constructor(
    @InjectRepository(AdminAdvertisingRevenueEntity)
    private adminAdvertisingRevenueEntity: Repository<AdminAdvertisingRevenueEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @param report_Type
   * @returns
   */

  async spGRpAdminAdvertisingRevenue(
    fromDate: string,
    toDate: string,
    report_Type: number
  ): Promise<AdminAdvertisingRevenueEntity[]> {
    let result = await this.adminAdvertisingRevenueEntity.query(
      "CALL sp_g_rp_admin_advertising_revenue(?,?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate, report_Type]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminAdvertisingRevenueEntity[] =
      new StoreProcedureResult<AdminAdvertisingRevenueEntity>().getResultList(
        result
      );

    return data;
  }
}
