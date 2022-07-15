import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResultOutput } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { Repository } from 'typeorm';
import { TmsCustomerReportEntity } from './tms-customer-report.entity/tms-customer-report.entity';
import { TmsCustomerReportOutputEntity } from './tms-customer-report.entity/tms-customer-report.output.entity';

@Injectable()
export class TmsCustomerReportService {
    constructor(
        @InjectRepository(TmsCustomerReportEntity)
        private tmsCustomerReportEntity: Repository<TmsCustomerReportEntity>
    ) {}

   
    /**
     * 
     * @param restaurant_id 
     * @param restaurant_brand_id 
     * @param branch_id 
     * @param from_date 
     * @param to_date 
     * @param group_type 
     * @returns 
     */
    async spGTmsCustomerReport(
        restaurantId: number,
        restaurantBrandId: number,
        branchId: number,
        fromDate: string,
        toDate: string,
        groupType: number,
    ) : Promise<StoreProcedureOutputResultInterface<TmsCustomerReportEntity, TmsCustomerReportOutputEntity>>{

        let result = await this.tmsCustomerReportEntity.query(
            "CALL sp_get_rp_restaurant_customer(?,?,?,?,?,?,@totalCustomerGoToRestaurant, @totalCustomerRegister,@totalCustomerSavePoint,@totalCustomerUsePoint,@totalCustomerReceivingGifts,@totalOrders,@status,@message); SELECT @totalCustomerGoToRestaurant AS total_customer_go_to_restaurant, @totalCustomerRegister AS total_customer_register,@totalCustomerSavePoint AS total_customer_save_point, @totalCustomerUsePoint AS total_customer_use_point,@totalCustomerReceivingGifts AS total_customer_receiving_gifts,@totalOrders AS total_orders,@status AS status_code,@message AS message_error",
            [restaurantId, restaurantBrandId, branchId, fromDate, toDate, groupType]
        );
         
          
          let data: StoreProcedureOutputResultInterface<
          TmsCustomerReportEntity,
          TmsCustomerReportOutputEntity
        > = new StoreProcedureResultOutput<TmsCustomerReportEntity>().getResultOutputList(
          result
        );
    
        return data;
    }   
}
