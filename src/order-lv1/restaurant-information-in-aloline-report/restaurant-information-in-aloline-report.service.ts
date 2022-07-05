import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantInformationInAlolineReportEntity } from './restaurant-information-in-aloline-report.entity/restaurant-information-in-aloline-report.entity';
@Injectable()
export class RestaurantInformationInAlolineReportService {

    @InjectRepository(RestaurantInformationInAlolineReportEntity)
    private restaurantVatReportEntity: Repository<RestaurantInformationInAlolineReportEntity>
    

     /**
   *@param restaurantId
   * @param _status
   * @param isOffice
   * @returns
   */
    async spGetRpRestaurantInformationInAloline(
        restaurantId : number , 
        _status : number ,
        isOffice : number 
        ): Promise<RestaurantInformationInAlolineReportEntity> {
        let result = await this.restaurantVatReportEntity.query('CALL sp_get_rp_restaurant_information_in_aloline(?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            _status,
            isOffice
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantInformationInAlolineReportEntity = new StoreProcedureResult<RestaurantInformationInAlolineReportEntity>().getResultDetail(result)
        return data ;
    }
}
