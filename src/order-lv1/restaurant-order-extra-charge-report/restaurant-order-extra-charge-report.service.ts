import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantOrderExtraChargeReportEntity } from './restaurant-order-extra-charge-report.entity/restaurant-order-extra-charge-report.entity';

@Injectable()
export class RestaurantOrderExtraChargeReportService {

    @InjectRepository(RestaurantOrderExtraChargeReportEntity)
    private restaurantOrderExtraChargeReportEntity: Repository<RestaurantOrderExtraChargeReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @param groupByType
   * @returns
   */
    async spGetRpRestaurantVat(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        groupByType : number ,
        fromDateString : string , 
        toDateString : string  
        ): Promise<RestaurantOrderExtraChargeReportEntity[]> {
        let result = await this.restaurantOrderExtraChargeReportEntity.query('CALL sp_get_rp_restaurant_order_extra_charge(?,?,?,?,?,?,@status,@message); SELECT @totalVatAmount AS total_vat_amount,@status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            groupByType,
            fromDateString,
            toDateString
          
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantOrderExtraChargeReportEntity[] = new StoreProcedureResult<RestaurantOrderExtraChargeReportEntity>().getResultList(result)
        return data ;
    }
}
