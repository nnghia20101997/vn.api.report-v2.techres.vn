import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { RestaurantCustomerReportEntity } from './restaurant-customer-report.entity/restaurant-customer-report.entity';
import { RestaurantCustomerReportOutputEntity } from './restaurant-customer-report.entity/restaurant-customer-report.output.entity';
@Injectable()
export class RestaurantCustomerReportService {
    constructor(
        @InjectRepository(
            RestaurantCustomerReportEntity
        )
        private restaurantCustomerReportEntity: Repository<RestaurantCustomerReportEntity>
) {}

/**
*@param restaurantId
* @param restaurantBrandId
* @param branchId
* @param fromDateString
* @param toDateString
* @param groupByType
* @returns
*/

async spGetRpRestaurantCustomer(
    restaurantId: number,
    restaurantBrandId: number,
    branchId: number,
    fromDateString : string ,
    toDateString : string,
    groupByType: number
  ): Promise<
    StoreProcedureOutputResultInterface<
    RestaurantCustomerReportEntity,object >
  > {
    let result =
      await this.restaurantCustomerReportEntity.query(
        "CALL sp_get_rp_restaurant_customer(?,?,?,?,?,?, @totalCustomerGoToRestaurant,@totalCustomerRegister,@totalCustomerSavePoint,@totalCustomerUsePoint,@totalCustomerReceivingGifts,@totalOrders,@status,@message); SELECT @totalCustomerGoToRestaurant AS total_customer_go_to_restaurant,@totalCustomerRegister AS total_customer_register,@totalCustomerSavePoint AS total_customer_save_point,@totalCustomerUsePoint AS total_customer_use_point,@totalCustomerReceivingGifts AS total_customer_receiving_gifts,@totalOrders AS total_orders,@status AS status_code,@message AS message_error",
        [restaurantId, restaurantBrandId, branchId,fromDateString,toDateString,groupByType]
      );
      ExceptionStoreProcedure.validate(result);

    let data: StoreProcedureOutputResultInterface<
    RestaurantCustomerReportEntity,
    RestaurantCustomerReportOutputEntity
    > = new StoreProcedureResultOutput<RestaurantCustomerReportEntity>().getResultOutputList(
      result
    );

    return data;
  }
}
