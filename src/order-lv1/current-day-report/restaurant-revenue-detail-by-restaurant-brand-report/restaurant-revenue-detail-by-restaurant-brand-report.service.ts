import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from './restaurant-revenue-detail-by-restaurant-brand-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity';

@Injectable()
export class RestaurantRevenueDetailByRestaurantBrandReportService {

    @InjectRepository(RestaurantRevenueDetailByRestaurantBrandReportEntity)
    private restaurantRevenueDetailByRestaurantBrandReportEntity: Repository<RestaurantRevenueDetailByRestaurantBrandReportEntity>
    
    async spGetRpRestaurantRevenueDetailByRestaurantBrand(
        restaurant_id : number , 
        restaurant_brand_id : number , 
        from_date_string : string , 
        to_date_string : string
        ): Promise<RestaurantRevenueDetailByRestaurantBrandReportEntity> {
        let result = await this.restaurantRevenueDetailByRestaurantBrandReportEntity.query('CALL sp_get_rp_restaurant_revenue_detail_by_restaurant_brand(?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurant_id,
            restaurant_brand_id,
            from_date_string,
            to_date_string
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueDetailByRestaurantBrandReportEntity = new StoreProcedureResult<RestaurantRevenueDetailByRestaurantBrandReportEntity>().getResultDetail(result)
        return data;
    }
}
