import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantDebtReportEntity } from './restaurant-debt-report.entity/restaurant-debt-report.entity';
@Injectable()
export class RestaurantDebtReportService {

    @InjectRepository(RestaurantDebtReportEntity)
    private restaurantDebtReportEntity: Repository<RestaurantDebtReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantDebt(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string 
        ): Promise<RestaurantDebtReportEntity> {
        let result = await this.restaurantDebtReportEntity.query('CALL sp_get_rp_restaurant_debt(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantDebtReportEntity = new StoreProcedureResult<RestaurantDebtReportEntity>().getResultDetail(result)
        return data ;
    }
}
