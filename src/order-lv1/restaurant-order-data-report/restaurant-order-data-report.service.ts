import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { RestaurantOrderDataReportEntity } from './restaurant-order-data-report.entity/restaurant-order-data-report.entity';
import { RestaurantOrderDataReportOutputEntity } from './restaurant-order-data-report.entity/restaurant-order-data-report.output.entity';
@Injectable()
export class RestaurantOrderDataReportService {
    @InjectRepository(RestaurantOrderDataReportEntity)
    private restaurantOrderDataReportEntity : Repository<RestaurantOrderDataReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param employeeId
   * @param areaId
   * @param keyWord
   * @param fromDateString
   * @param toDateString
   * @param _offset
   * @param _limit
   * @returns
   */
   async spGetRpRestaurantOrderData(
    restaurantId: number,
    restaurantBrandId: number,
    branchId: number,
    employeeId: number,
    areaId: number,
    keyWord : string ,
    fromDateString : string ,
    toDateString : string,
    _offset: number,
    _limit: number
  ): Promise<
    StoreProcedureOutputResultInterface<
    RestaurantOrderDataReportEntity,object >
  > {
    let result =
      await this.restaurantOrderDataReportEntity.query(
        "CALL sp_get_rp_restaurant_order_data(?,?,?,?,?,?,?,?,?,?, @totalRecord, @totalVATAmount,@totalCashAmount,@totalTransferAmount, @totalBankAmount,@totalAmount,@totalDiscountAmount, @totalCustomer,  @status, @messsage)"
        + "; SELECT @totalRecord AS total_record ,@totalVATAmount AS total_vat_amount,@totalCashAmount AS total_cash_amount,@totalTransferAmount AS total_transfer_amount, @totalBankAmount AS total_bank_amount,@totalAmount AS total_amount,@totalDiscountAmount AS total_discount_amount, @totalCustomer AS total_customer, @status AS status_code , @message AS message_error",
        [restaurantId, restaurantBrandId, branchId, employeeId, areaId,keyWord,fromDateString,toDateString, _offset, _limit]
      );
      ExceptionStoreProcedure.validate(result);

    let data: StoreProcedureOutputResultInterface<
    RestaurantOrderDataReportEntity,
    RestaurantOrderDataReportOutputEntity
    > = new StoreProcedureResultOutput<RestaurantOrderDataReportEntity>().getResultOutputList(
      result
    );

    return data;
  }
}
