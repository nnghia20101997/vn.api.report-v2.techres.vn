import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { CustomerUsePointsReportEntity } from './customer-use-points-report.entity/customer-use-points-report.entity';

@Injectable()
export class CustomerUsePointsReportService {
    @InjectRepository(CustomerUsePointsReportEntity)
    private customerUsePointsReportEntity: Repository<CustomerUsePointsReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @param typePoint
   * @param _limit
   * @param _offset
   * @returns
   */
    async spGetRpCustomerUsePoints(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string , 
        typePoint : number ,
        _limit : number ,
        _offset : number 
        ): Promise<CustomerUsePointsReportEntity[]> {
        let result = await this.customerUsePointsReportEntity.query('CALL sp_get_rp_customer_use_points(?,?,?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString,
            typePoint,
            _limit,
            _offset
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : CustomerUsePointsReportEntity[] = new StoreProcedureResult<CustomerUsePointsReportEntity>().getResultList(result)
        return data ;
    }


}
