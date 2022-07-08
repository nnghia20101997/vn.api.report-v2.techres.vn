import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantEmployeeTargetReportEntity } from './restaurant-employee-target-report.entity/restaurant-employee-target-report.entity';

@Injectable()
export class RestaurantEmployeeTargetReportService {
    @InjectRepository(RestaurantEmployeeTargetReportEntity)
    private restaurantEmployeeTargetReportEntity: Repository<RestaurantEmployeeTargetReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantEmployeeTarget(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,
        fromDateString : string , 
        toDateString : string 
        ): Promise<RestaurantEmployeeTargetReportEntity[]> {
        let result = await this.restaurantEmployeeTargetReportEntity.query('CALL sp_get_rp_restaurant_employee_target(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantEmployeeTargetReportEntity[] = new StoreProcedureResult<RestaurantEmployeeTargetReportEntity>().getResultList(result)
        return data ;
    }
}
