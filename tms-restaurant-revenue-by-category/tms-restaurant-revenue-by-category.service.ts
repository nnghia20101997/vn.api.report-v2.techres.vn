import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueByCategoryReportEntity } from './tms-restaurant-revenue-by-category.entity/tms-restaurant-revenue-by-category.entity';

@Injectable()
export class TmsRestaurantRevenueByCategoryService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueByCategoryReportEntity)
        private tmsRestaurantRevenueByCategoryReportEntity: Repository<TmsRestaurantRevenueByCategoryReportEntity>,
    ) {}

    async spGRPRestaurantRevenueByCategory(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        categoryType: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantRevenueByCategoryReportEntity[]>{
        
        let result = await this.tmsRestaurantRevenueByCategoryReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_by_category(?,?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,categoryType,fromDate, toDate]
        );
        
        let data: TmsRestaurantRevenueByCategoryReportEntity[] = new StoreProcedureResult<TmsRestaurantRevenueByCategoryReportEntity>().getResultList(result);

        return data;
    }
}
