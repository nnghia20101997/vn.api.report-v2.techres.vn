import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantProfitDebtAmountSummaryReportEntity } from './restaurant-profit-debt-amount-summary-report.entity/restaurant-profit-debt-amount-summary-report.entity';

@Injectable()
export class RestaurantProfitDebtAmountSummaryReportService {
    @InjectRepository(RestaurantProfitDebtAmountSummaryReportEntity)
    private restaurantProfitDebtAmountSummaryReportEntity: Repository<RestaurantProfitDebtAmountSummaryReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantProfitDebtAmountSummary(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string  
      
        ): Promise<RestaurantProfitDebtAmountSummaryReportEntity[]> {
        let result = await this.restaurantProfitDebtAmountSummaryReportEntity.query('CALL sp_get_rp_restaurant_profit_debt_amount_summary(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
           
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantProfitDebtAmountSummaryReportEntity[] = new StoreProcedureResult<RestaurantProfitDebtAmountSummaryReportEntity>().getResultList(result)
        return data ;
    }
}
