import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { RestaurantCashDetailReportEntity } from './restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity';
import { RestaurantCashDetailReportOutputEntity } from './restaurant-cash-detail-report.entity/restaurant-cash-detail-report.output.entity';

@Injectable()
export class RestaurantCashDetailReportService {

    constructor(
            @InjectRepository(
                RestaurantCashDetailReportEntity
            )
            private restaurantCashDetailReportEntity: Repository<RestaurantCashDetailReportEntity>
    ) {}
    
    /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param keyWord
   * @param _type
   * @param fromDateString
   * @param toDateString
   * @param _offset
   * @param _limit
   * @returns
   */

   async spGetRpRestaurantCashDetail(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        keyWord: string,
        _type: number,
        fromDateString : string ,
        toDateString : string,
        _offset: number,
        _limit: number
      ): Promise<
        StoreProcedureOutputResultInterface<
        RestaurantCashDetailReportEntity,object >
      > {
        let result =
          await this.restaurantCashDetailReportEntity.query(
            "CALL sp_get_rp_restaurant_cash_detail(?,?,?,?,?,?,?,?,?, @totalAmountReceipt, @totalAmountPayment ,@totalAmount,@totalRecordReceipt, @totalRecordPayment, @totalRecord,  @status, @messsage); SELECT @totalAmountReceipt AS total_amount_receipt, @totalAmountPayment AS total_amount_payment ,@totalAmount AS total_amount,@totalRecordReceipt AS total_record_receipt, @totalRecordPayment AS total_record_payment, @totalRecord AS total_record , @status AS status_code , @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, keyWord, _type,fromDateString,toDateString, _offset, _limit]
          );
          ExceptionStoreProcedure.validate(result);
    
        let data: StoreProcedureOutputResultInterface<
        RestaurantCashDetailReportEntity,
        RestaurantCashDetailReportOutputEntity
        > = new StoreProcedureResultOutput<RestaurantCashDetailReportEntity>().getResultOutputList(
          result
        );
    
        return data;
      }
}
