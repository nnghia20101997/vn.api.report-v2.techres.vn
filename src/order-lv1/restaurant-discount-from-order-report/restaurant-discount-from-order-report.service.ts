import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantDiscountFromOrderReportEntity } from './restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity';

@Injectable()
export class RestaurantDiscountFromOrderReportService {

    @InjectRepository(RestaurantDiscountFromOrderReportEntity)
    private dataReport: Repository<RestaurantDiscountFromOrderReportEntity>


    async spGetRpRestaurantDiscountFromOrder(
        restaurant_id : number , 
        restaurant_brand_id : number ,
        branch_id : number ,
        group_by_type : number,  
        from_date_string : string , 
        to_date_string : string
        ): Promise<RestaurantDiscountFromOrderReportEntity[]> {
        let result = await this.dataReport.query('CALL sp_get_rp_restaurant_discount_from_order(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurant_id,
            restaurant_brand_id,
            branch_id,
            group_by_type,
            from_date_string,
            to_date_string
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantDiscountFromOrderReportEntity[] = new StoreProcedureResult<RestaurantDiscountFromOrderReportEntity>().getResultList(result)
        return data ;
    }
}
