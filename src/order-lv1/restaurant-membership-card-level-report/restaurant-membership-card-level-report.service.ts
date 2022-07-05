import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantMembershipCardLevelReportEntity } from './restaurant-membership-card-level-report.entity/restaurant-membership-card-level-report.entity';

@Injectable()
export class RestaurantMembershipCardLevelReportService {

    @InjectRepository(RestaurantMembershipCardLevelReportEntity)
    private restaurantMembershipCardLevelReportEntity: Repository<RestaurantMembershipCardLevelReportEntity>
    

     /**
   *@param restaurantId
   * @returns
   */
    async spGetRpRestaurantMembershipCardLevel(
        restaurantId : number 
        ): Promise<RestaurantMembershipCardLevelReportEntity[]> {
        let result = await this.restaurantMembershipCardLevelReportEntity.query('CALL sp_get_rp_restaurant_membership_card_level(?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantMembershipCardLevelReportEntity[] = new StoreProcedureResult<RestaurantMembershipCardLevelReportEntity>().getResultList(result)
        return data ;
    }
}
