import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminTopTenProductBestSellerDetailDataModelEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";

@Injectable()
export class AdminTopTenProductBestSellerDetailService {
  constructor(
    @InjectRepository(AdminTopTenProductBestSellerDetailDataModelEntity)
    private adminTopTenProductBestSellerDetailDataModelEntity: Repository<AdminTopTenProductBestSellerDetailDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @param _offset
   *  @param _limit
   * @returns
   */

  async spGRpAdminTopTenProductBestSellerDetail(
    fromDate: string,
    toDate: string,
    _offset: number,
    _limit: number
  ): Promise<AdminTopTenProductBestSellerDetailDataModelEntity[]> {
    let result =
      await this.adminTopTenProductBestSellerDetailDataModelEntity.query(
        "CALL sp_g_rp_admin_top_ten_product_best_seller_detail(?,?,?,?,@status,@message); SELECT @status AS status , @message AS message",
        [fromDate, toDate, _offset, _limit]
      );
    ExceptionStoreProcedure.validate(result);
    let data: AdminTopTenProductBestSellerDetailDataModelEntity[] =
      new StoreProcedureResult<AdminTopTenProductBestSellerDetailDataModelEntity>().getResultList(
        result
      );

    return data;
  }
}
