import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantBusinessGrowthReportEntity } from './overview-business-growth-report.entity/restaurant-business-growth-report.entity';
import { RestaurantBusinessGrowthSummaryReportEntity } from './overview-business-growth-report.entity/restaurant-business-growth-summary-report.entity';
@Injectable()
export class OverviewBusinessGrowthReportService {

    @InjectRepository(RestaurantBusinessGrowthReportEntity)
    private restaurantBusinessGrowthReportEntity: Repository<RestaurantBusinessGrowthReportEntity>

    @InjectRepository(RestaurantBusinessGrowthSummaryReportEntity)
    private restaurantBusinessGrowthSummaryReportEntity: Repository<RestaurantBusinessGrowthSummaryReportEntity>
    

     /**
   * @param restaurantId
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

    /**
   * @param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @param groupByType
   * @returns
   */
       async spGetRpRestaurantBusinessGrowthSummary(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string ,
        groupByType : number
        ): Promise<RestaurantBusinessGrowthSummaryReportEntity> {
        let result = await this.restaurantBusinessGrowthSummaryReportEntity.query('CALL sp_get_rp_restaurant_business_growth_summary(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString,
            groupByType
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantBusinessGrowthSummaryReportEntity = new StoreProcedureResult<RestaurantBusinessGrowthSummaryReportEntity>().getResultDetail(result)
        return data ;
    }

}
