import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { TmsRestaurantDebtReportEntity } from './tms-restaurant-debt-report.entity/tms-restaurant-debt-report.entity';

@Injectable()
export class TmsRestaurantDebtReportService {
    constructor(
        @InjectRepository(TmsRestaurantDebtReportEntity)
        private tmsRestaurantDebtReportEntity: Repository<TmsRestaurantDebtReportEntity>,
    ) {}

    async spGRPRestaurantDebt(
        restaurantId : number,
        restaurantBrandId : number,
        branchId : number,
        fromDate : string,
        toDate : string
    ): Promise<TmsRestaurantDebtReportEntity>{
        
        let result = await this.tmsRestaurantDebtReportEntity.query(
            "CALL sp_get_rp_restaurant_debt(?,?,?,?,?, @status, @message); SELECT @status AS status_code, @message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate]
        );
        
        let data: TmsRestaurantDebtReportEntity = new StoreProcedureResult<TmsRestaurantDebtReportEntity>().getResultDetail(result);

        return data;
    }
}
