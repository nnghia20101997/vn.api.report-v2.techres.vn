import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminGravityProductBestSellerDataModelEntity } from "./admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";

@Injectable()
export class AdminGravityProductBestSellerService{
constructor(
    @InjectRepository(AdminGravityProductBestSellerDataModelEntity)
    private adminGravityProductBestSellerDataModelEntity: Repository<AdminGravityProductBestSellerDataModelEntity>
  ) {}

    /**
   *
   * @param fromDate
   * @param toDate
   * @returns
   */
     async spGRpAdminGravityProductBestSeller(
        fromDate: string,
        toDate: string,
      ): Promise<AdminGravityProductBestSellerDataModelEntity[]> {
        let result = await this.adminGravityProductBestSellerDataModelEntity.query(
          "CALL sp_g_rp_admin_gravity_product_best_seller(?,?,@status,@message); SELECT @status AS status , @message AS message",
          [fromDate, toDate]
        );
        ExceptionStoreProcedure.validate(result);
        let data: AdminGravityProductBestSellerDataModelEntity[] =
          new StoreProcedureResult<AdminGravityProductBestSellerDataModelEntity>().getResultList(
            result
          );
    
        return data;
      }
}