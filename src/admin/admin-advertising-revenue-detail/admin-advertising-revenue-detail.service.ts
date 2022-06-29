import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminAdvertisingRevenueDetailDataModelEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";

@Injectable()
export class AdminAdvertisingRevenueDetailService {
  constructor(
    @InjectRepository(AdminAdvertisingRevenueDetailDataModelEntity)
    private adminTopTenProductBestSellerDetailDataModelEntity: Repository<AdminAdvertisingRevenueDetailDataModelEntity>
  ) {}

  /**
   *@param branchId
   * @param groupByType
   * @param fromDate
   * @param toDate
   * @param _offset
   *  @param _limit
   * @returns
   */

  async spGRpAdminAdvertisingRevenueDetail(
    branchId:number,
    groupByType:number,
    fromDate: string,
    toDate: string,
    _offset: number,
    _limit: number
  ): Promise<AdminAdvertisingRevenueDetailDataModelEntity[]> {
    let result =
      await this.adminTopTenProductBestSellerDetailDataModelEntity.query(
        "CALL sp_g_rp_admin_advertising_revenue_detail(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message",
        [branchId,groupByType,fromDate, toDate, _offset, _limit]
      );
    ExceptionStoreProcedure.validate(result);
    let data: AdminAdvertisingRevenueDetailDataModelEntity[] =
      new StoreProcedureResult<AdminAdvertisingRevenueDetailDataModelEntity>().getResultList(
        result
      );

    return data;
  }
}
