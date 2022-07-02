import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity';

@Injectable()
export class RestaurantRevenueCostCustomerByRestaurantBrandReportService {

    @InjectRepository(RestaurantRevenueCostCustomerByRestaurantBrandReportEntity)
    private restaurantRevenueCostCustomerByRestaurantBrandReportEntity: Repository<RestaurantRevenueCostCustomerByRestaurantBrandReportEntity>


    async spGetRpRestaurantRevenueCostCustomerByRestaurantBrand(
        restaurant_id : number , 
        restaurant_brand_id : number ,
        branch_id : number ,  
        from_date_string : string , 
        to_date_string : string
        ): Promise<RestaurantRevenueCostCustomerByRestaurantBrandReportEntity> {
        let result = await this.restaurantRevenueCostCustomerByRestaurantBrandReportEntity.query('CALL sp_get_rp_restaurant_revenue_cost_customer_by_restaurant_brand(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurant_id,
            restaurant_brand_id,
            branch_id,
            from_date_string,
            to_date_string
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueCostCustomerByRestaurantBrandReportEntity = new StoreProcedureResult<RestaurantRevenueCostCustomerByRestaurantBrandReportEntity>().getResultDetail(result)
        return data;
    }

}
