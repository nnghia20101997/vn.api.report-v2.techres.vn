import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantBusinessGrowthReportEntity } from './restaurant-business-growth-report.entity/restaurant-business-growth-report.entity';
@Injectable()
export class RestaurantBusinessGrowthReportService {

    @InjectRepository(RestaurantBusinessGrowthReportEntity)
    private restaurantBusinessGrowthReportEntity: Repository<RestaurantBusinessGrowthReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @param groupByType
   * @returns
   */
    async spGetRpRestaurantBusinessGrowth(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string ,
        groupByType : number
        ): Promise<RestaurantBusinessGrowthReportEntity[]> {
        let result = await this.restaurantBusinessGrowthReportEntity.query('CALL sp_get_rp_restaurant_business_growth(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString,
            groupByType
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantBusinessGrowthReportEntity[] = new StoreProcedureResult<RestaurantBusinessGrowthReportEntity>().getResultList(result)
        return data ;
    }

}
