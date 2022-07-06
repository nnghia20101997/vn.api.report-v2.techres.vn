import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { RestaurantOrderDetailByFoodIdReportEntity } from './restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.entity';
import { RestaurantOrderDetailByFoodIdReportOutputEntity } from './restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.output.entity';

@Injectable()
export class RestaurantOrderDetailByFoodIdReportService {
    @InjectRepository(RestaurantOrderDetailByFoodIdReportEntity)
    private restaurantOrderDetailByFoodIdReportEntity : Repository<RestaurantOrderDetailByFoodIdReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param employeeId
   * @param foodId
   * @param fromDateString
   * @param toDateString
   * @param _offset
   * @param _limit
   * @returns
   */
   async spGetRpRestaurantOrderDetailByFoodId(
    restaurantId: number,
    restaurantBrandId: number,
    branchId: number,
    employeeId: number,
    foodId: number,
    fromDateString : string ,
    toDateString : string,
    _offset: number,
    _limit: number
  ): Promise<
    StoreProcedureOutputResultInterface<
    RestaurantOrderDetailByFoodIdReportEntity,object >
  > {
    let result =
      await this.restaurantOrderDetailByFoodIdReportEntity.query(
        "CALL sp_get_rp_restaurant_order_detail_by_food_id(?,?,?,?,?,?,?,?,?, @totalRecord,  @status, @messsage); SELECT @totalRecord AS total_record , @status AS status_code , @message AS message_error",
        [restaurantId, restaurantBrandId, branchId, employeeId, foodId,fromDateString,toDateString, _offset, _limit]
      );
      ExceptionStoreProcedure.validate(result);

    let data: StoreProcedureOutputResultInterface<
    RestaurantOrderDetailByFoodIdReportEntity,
    RestaurantOrderDetailByFoodIdReportOutputEntity
    > = new StoreProcedureResultOutput<RestaurantOrderDetailByFoodIdReportEntity>().getResultOutputList(
      result
    );

    return data;
  }
}
