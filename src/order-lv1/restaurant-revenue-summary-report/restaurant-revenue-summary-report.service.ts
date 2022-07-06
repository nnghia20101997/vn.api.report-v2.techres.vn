import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantRevenueSummaryReportEntity } from './restaurant-revenue-summary-report.entity/restaurant-revenue-summary-report.entity';
@Injectable()
export class RestaurantRevenueSummaryReportService {

    @InjectRepository(RestaurantRevenueSummaryReportEntity)
    private restaurantRevenueSummaryReportEntity: Repository<RestaurantRevenueSummaryReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantRevenueSummary(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string 
        ): Promise<RestaurantRevenueSummaryReportEntity[]> {
        let result = await this.restaurantRevenueSummaryReportEntity.query('CALL sp_get_rp_restaurant_revenue_summary(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueSummaryReportEntity[] = new StoreProcedureResult<RestaurantRevenueSummaryReportEntity>().getResultList(result)
        return data ;
    }
}
