import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantRevenueByBranchReportEntity } from './restaurant-revenue-by-branch-report.entity/restaurant-revenue-by-branch-report.entity';

@Injectable()
export class RestaurantRevenueByBranchReportService {

    @InjectRepository(RestaurantRevenueByBranchReportEntity)
    private restaurantRevenueByBranchReportEntity: Repository<RestaurantRevenueByBranchReportEntity>


    async spGetRpRestaurantRevenueByBranch(
        restaurant_id : number , 
        restaurant_brand_id : number ,
        branch_id : number ,  
        from_date_string : string , 
        to_date_string : string
        ): Promise<RestaurantRevenueByBranchReportEntity[]> {
        let result = await this.restaurantRevenueByBranchReportEntity.query('CALL sp_get_rp_restaurant_revenue_by_branch(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurant_id,
            restaurant_brand_id,
            branch_id,
            from_date_string,
            to_date_string
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueByBranchReportEntity[] = new StoreProcedureResult<RestaurantRevenueByBranchReportEntity>().getResultList(result)
        return data ;
    }
}
