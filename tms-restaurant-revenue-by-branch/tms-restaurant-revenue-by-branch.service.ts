import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueByBrandReportEntity } from './tms-restaurant-revenue-by-branch.entity/tms-restaurant-revenue-by-branch.entity';

@Injectable()
export class TmsRestaurantRevenueByBranchService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueByBrandReportEntity)
        private tmsRestaurantRevenueByBrandReportEntity: Repository<TmsRestaurantRevenueByBrandReportEntity>,
    ) {}

    async spGRPRestaurantRevenueByBranch(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string
    ): Promise<TmsRestaurantRevenueByBrandReportEntity[]>{
        
        let result = await this.tmsRestaurantRevenueByBrandReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_by_branch(?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId,restaurantBrandId,branchId,fromDate, toDate]
        );
        
        let data: TmsRestaurantRevenueByBrandReportEntity[] = new StoreProcedureResult<TmsRestaurantRevenueByBrandReportEntity>().getResultList(result);

        return data;
    }
}
