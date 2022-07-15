import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantRevenueByAreaReportEntity } from './tms-restaurant-revenue-by-area-report.entity/tms-restaurant-revenue-by-area-report.entity';

@Injectable()
export class TmsRestaurantRevenueByAreaReportService {
    constructor(
        @InjectRepository(TmsRestaurantRevenueByAreaReportEntity)
        private tmsRestaurantRevenueByAreaReportEntity: Repository<TmsRestaurantRevenueByAreaReportEntity>,
    ) {}

    async spGRPRestaurantRevenueByArea(
        branchId : number,
        fromDate : string,
        toDate : string
    ): Promise<TmsRestaurantRevenueByAreaReportEntity[]>{
        
        let result = await this.tmsRestaurantRevenueByAreaReportEntity.query(
            "CALL sp_get_rp_restaurant_revenue_by_area(?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [branchId, fromDate, toDate]
        );
        
        let data: TmsRestaurantRevenueByAreaReportEntity[] = new StoreProcedureResult<TmsRestaurantRevenueByAreaReportEntity>().getResultList(result);

        return data;
    }
}

