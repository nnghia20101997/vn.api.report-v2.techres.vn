import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantVatReportEntity } from './restaurant-vat-report.entity/restaurant-vat-report.entity';

@Injectable()
export class RestaurantVatReportService {
    
    @InjectRepository(RestaurantVatReportEntity)
    private restaurantVatReportEntity: Repository<RestaurantVatReportEntity>
    

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
        fromDateString : string , 
        toDateString : string , 
        groupByType : number 
        ): Promise<RestaurantVatReportEntity[]> {
        let result = await this.restaurantVatReportEntity.query('CALL sp_get_rp_restaurant_vat(?,?,?,?,?,?,@totalVatAmount,@status,@message); SELECT @totalVatAmount AS total_vat_amount,@status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString,
            groupByType,
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantVatReportEntity[] = new StoreProcedureResult<RestaurantVatReportEntity>().getResultList(result)
        return data ;
    }
}
