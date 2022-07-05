import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantMembershipCardLevelReportQueryDTO } from './restaurant-membership-card-level-report.dto/restaurant-membership-card-level-report.query.dto';
import { RestaurantMembershipCardLevelReportEntity } from './restaurant-membership-card-level-report.entity/restaurant-membership-card-level-report.entity';
import { RestaurantMembershipCardLevelReportResponse } from './restaurant-membership-card-level-report.response/restaurant-membership-card-level-report.response';
import { RestaurantMembershipCardLevelReportService } from './restaurant-membership-card-level-report.service';
@Controller('api/restaurant-membership-card-level-report')
export class RestaurantMembershipCardLevelReportController {

    constructor(
        private restaurantMembershipCardLevelReportService: RestaurantMembershipCardLevelReportService
    ) { }

    @Get("")
    async getRpRestaurantMembershipCardLevel(@Query() restaurantMembershipCardLevelReportQueryDTO : RestaurantMembershipCardLevelReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantMembershipCardLevelReportEntity[]= await this.restaurantMembershipCardLevelReportService.spGetRpRestaurantMembershipCardLevel(
            restaurantMembershipCardLevelReportQueryDTO.restaurant_id 

        );
            response.setData(new RestaurantMembershipCardLevelReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
