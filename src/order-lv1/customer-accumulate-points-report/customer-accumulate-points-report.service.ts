import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';import { CustomerAccumulatePointsReportEntity } from './customer-accumulate-points-report.entity/customer-accumulate-points-report.entity';

@Injectable()
export class CustomerAccumulatePointsReportService {

    @InjectRepository(CustomerAccumulatePointsReportEntity)
    private customerAccumulatePointsReportEntity: Repository<CustomerAccumulatePointsReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @param _limit
   * @param _offset
   * @returns
   */
    async spGetRpCustomerAccumulatePoints(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string , 
        _limit : number ,
        _offset : number 
        ): Promise<CustomerAccumulatePointsReportEntity[]> {
        let result = await this.customerAccumulatePointsReportEntity.query('CALL sp_get_rp_customer_accumulate_points(?,?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString,
            _limit,
            _offset
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : CustomerAccumulatePointsReportEntity[] = new StoreProcedureResult<CustomerAccumulatePointsReportEntity>().getResultList(result)
        return data ;
    }

}
