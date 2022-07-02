import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantVatReportEntity } from './restaurant-vat-report.entity/restaurant-vat-report.entity';

@Injectable()
export class RestaurantVatReportService {

    @InjectRepository(RestaurantVatReportEntity)
    private dataReport: Repository<RestaurantVatReportEntity>


    async spGetRpRestaurantVat(
        restaurant_id : number , 
        restaurant_brand_id : number ,
        branch_id : number , 
        from_date_string : string , 
        to_date_string : string,
        group_by_type : number
        ): Promise<RestaurantVatReportEntity[]> {
        let result = await this.dataReport.query('CALL sp_get_rp_restaurant_vat(?,?,?,?,?,?,@total_amount,@status,@message); SELECT @total_amount AS total_amount,@status AS status , @message AS message',
        [
            restaurant_id,
            restaurant_brand_id,
            branch_id,
            from_date_string,
            to_date_string,
            group_by_type
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantVatReportEntity[] = new StoreProcedureResult<RestaurantVatReportEntity>().getResultList(result)
        return data ;
    }

}
