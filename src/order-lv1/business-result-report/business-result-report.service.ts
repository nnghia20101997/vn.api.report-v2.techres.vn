import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantResultBusinessAndProfitReportEntity } from './business-result-report.entity/restaurant-result-business-and-profit-report.entity';
import { RestaurantRevenueCostSummaryReportEntity } from './business-result-report.entity/restaurant-revenue-cost-summary-report.entity';
@Injectable()
export class BusinessResultReportService {
    @InjectRepository(RestaurantResultBusinessAndProfitReportEntity)
    private restaurantVatReportEntity: Repository<RestaurantResultBusinessAndProfitReportEntity>
    
    @InjectRepository(RestaurantRevenueCostSummaryReportEntity)
    private restaurantRevenueCostSummaryReportEntity: Repository<RestaurantRevenueCostSummaryReportEntity>

     /**
   * @param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @param groupByType
   * @returns
   */
    async spGetRpRestaurantResultBusinessAndProfit(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string , 
        groupByType : number 
        ): Promise<RestaurantResultBusinessAndProfitReportEntity[]> {
        let result = await this.restaurantVatReportEntity.query('CALL sp_get_rp_restaurant_result_business_and_profit(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString,
            groupByType,
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantResultBusinessAndProfitReportEntity[] = new StoreProcedureResult<RestaurantResultBusinessAndProfitReportEntity>().getResultList(result)
        return data ;
    }


      /**
   * @param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param additionFeeReasonTypeId
   * @param fromDateString
   * @param toDateString
   * @param groupByType
   * @returns
   */
       async spGetRpRestaurantRevenueCostSummary(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        additionFeeReasonTypeId : number , 
        fromDateString : string , 
        toDateString : string , 
        groupByType : number 
        ): Promise<RestaurantRevenueCostSummaryReportEntity[]> {
        let result = await this.restaurantVatReportEntity.query('CALL sp_get_rp_restaurant_revenue_cost_summary(?,?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            additionFeeReasonTypeId,
            fromDateString,
            toDateString,
            groupByType,
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueCostSummaryReportEntity[] = new StoreProcedureResult<RestaurantRevenueCostSummaryReportEntity>().getResultList(result)
        return data ;
    }
}
