import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantDebtReportQueryDTO } from './restaurant-debt-report.dto/restaurant-debt-report.query.dto';
import { RestaurantDebtReportEntity } from './restaurant-debt-report.entity/restaurant-debt-report.entity';
import { RestaurantDebtReportResponse } from './restaurant-debt-report.response/restaurant-debt-report.response';
import { RestaurantDebtReportService } from './restaurant-debt-report.service';
@Controller('api/restaurant-debt-report')
export class RestaurantDebtReportController {

    constructor(
        private restaurantDebtReportService: RestaurantDebtReportService
    ) { }

    @Get("")
    async getRpRestaurantDebt(@Query()  restaurantDebtReportQueryDTO : RestaurantDebtReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result :RestaurantDebtReportEntity = await this.restaurantDebtReportService.spGetRpRestaurantDebt(
            restaurantDebtReportQueryDTO.restaurant_id ,
            restaurantDebtReportQueryDTO.restaurant_brand_id,
            restaurantDebtReportQueryDTO.branch_id,
            restaurantDebtReportQueryDTO.from_date_string,
            restaurantDebtReportQueryDTO.to_date_string

        );
            response.setData(new RestaurantDebtReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
