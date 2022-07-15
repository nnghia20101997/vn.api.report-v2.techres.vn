import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueDetailByRestaurantBrandReportEntity } from './tms-restaurant-revenue-detail-by-restaurant-brand.entity/tms-restaurant-revenue-detail-by-restaurant-brand.entity';

@Injectable()
export class TmsRestaurantRevenueDetailByRestaurantBrandService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueDetailByRestaurantBrandReportEntity)
        private tmsRestaurantRevenueDetailByRestaurantBrandReportEntity: Repository<TmsRestaurantRevenueDetailByRestaurantBrandReportEntity>,
    ) {}

    async spGRPRestaurantRevenueDetailByRestaurantBrand(
        restaurantId: number,
        restaurantBrandId: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantRevenueDetailByRestaurantBrandReportEntity[]>{
        
        let result = await this.tmsRestaurantRevenueDetailByRestaurantBrandReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_detail_by_restaurant_brand(?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,fromDate, toDate]
        );
        
        let data: TmsRestaurantRevenueDetailByRestaurantBrandReportEntity[] = new StoreProcedureResult<TmsRestaurantRevenueDetailByRestaurantBrandReportEntity>().getResultList(result);

        return data;
    }
}
