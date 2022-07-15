import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity/tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity';

@Injectable()
export class TmsRestaurantRevenueCostCustomerByRestaurantBrandService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity)
        private tmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity: Repository<TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity>,
    ) {}

    async spGRPRestaurantRevenueCostCustomerByRestaurantBrand(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity[]>{
        
        let result = await this.tmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_cost_customer_by_restaurant_brand(?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,fromDate, toDate]
        );
        
        let data: TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity[] = new StoreProcedureResult<TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity>().getResultList(result);

        return data;
    }
}
