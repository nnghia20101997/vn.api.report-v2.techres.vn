import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantDiscountFromOrderReportEntity } from './restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity';

@Injectable()
export class RestaurantDiscountFromOrderReportService {
    @InjectRepository(RestaurantDiscountFromOrderReportEntity)
    private restaurantDiscountFromOrderReportEntity: Repository<RestaurantDiscountFromOrderReportEntity>


    /**
  *@param restaurantId
  * @param restaurantBrandId
  * @param branchId
  * @param groupByType
  * @param fromDateString
  * @param toDateString
  * @returns
  */
    async spGetRpRestaurantDiscountFromOrder(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        groupByType: number,
        fromDateString: string,
        toDateString: string
    ): Promise<RestaurantDiscountFromOrderReportEntity[]> {
        let result = await this.restaurantDiscountFromOrderReportEntity.query('CALL sp_get_rp_restaurant_discount_from_order(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
            [
                restaurantId,
                restaurantBrandId,
                branchId,
                groupByType,
                fromDateString,
                toDateString
            ]);
        ExceptionStoreProcedure.validate(result);
        let data: RestaurantDiscountFromOrderReportEntity[] = new StoreProcedureResult<RestaurantDiscountFromOrderReportEntity>().getResultList(result)
        return data;
    }
}
