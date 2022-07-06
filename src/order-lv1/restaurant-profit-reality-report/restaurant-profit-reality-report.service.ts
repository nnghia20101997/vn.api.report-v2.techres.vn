import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantProfitRealityReportEntity } from './restaurant-profit-reality-report.entity/restaurant-profit-reality-report.entity';
@Injectable()
export class RestaurantProfitRealityReportService {

    @InjectRepository(RestaurantProfitRealityReportEntity)
    private restaurantProfitRealityReportEntity: Repository<RestaurantProfitRealityReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantProfitReality(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string  
      
        ): Promise<RestaurantProfitRealityReportEntity> {
        let result = await this.restaurantProfitRealityReportEntity.query('CALL sp_get_rp_restaurant_profit_reality(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
           
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantProfitRealityReportEntity = new StoreProcedureResult<RestaurantProfitRealityReportEntity>().getResultDetail(result)
        return data ;
    }
}
