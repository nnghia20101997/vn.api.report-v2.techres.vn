import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantInformationInAlolineReportQueryDTO } from './restaurant-information-in-aloline-report.dto/restaurant-information-in-aloline-report.query.dto';
import { RestaurantInformationInAlolineReportEntity } from './restaurant-information-in-aloline-report.entity/restaurant-information-in-aloline-report.entity';
import { RestaurantInformationInAlolineReportResponse } from './restaurant-information-in-aloline-report.response/restaurant-information-in-aloline-report.response';
import { RestaurantInformationInAlolineReportService } from './restaurant-information-in-aloline-report.service';

@Controller('api/restaurant-information-in-aloline-report')
export class RestaurantInformationInAlolineReportController {

    constructor(
        private restaurantInformationInAlolineReportService: RestaurantInformationInAlolineReportService
    ) { }

    @Get("")
    async getRpRestaurantInformationInAloline(@Query() restaurantInformationInAlolineReportQueryDTO : RestaurantInformationInAlolineReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantInformationInAlolineReportEntity= await this.restaurantInformationInAlolineReportService.spGetRpRestaurantInformationInAloline(
            restaurantInformationInAlolineReportQueryDTO.restaurant_id ,
            restaurantInformationInAlolineReportQueryDTO.status,
            restaurantInformationInAlolineReportQueryDTO.is_office

        );
            response.setData(new RestaurantInformationInAlolineReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
