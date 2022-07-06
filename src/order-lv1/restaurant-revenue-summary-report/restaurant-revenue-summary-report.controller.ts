import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantRevenueSummaryReportQueryDTO } from './restaurant-revenue-summary-report.dto/restaurant-revenue-summary-report.query.dto';
import { RestaurantRevenueSummaryReportEntity } from './restaurant-revenue-summary-report.entity/restaurant-revenue-summary-report.entity';
import { RestaurantRevenueSummaryReportResponse } from './restaurant-revenue-summary-report.response/restaurant-revenue-summary-report.response';
import { RestaurantRevenueSummaryReportService } from './restaurant-revenue-summary-report.service';
@Controller('api/restaurant-revenue-summary-report')
export class RestaurantRevenueSummaryReportController {
    constructor(
        private restaurantRevenueSummaryReportService: RestaurantRevenueSummaryReportService
    ) { }

    @Get("")
    async getRpRestaurantRevenueSummary(@Query() restaurantRevenueSummaryReportQueryDTO : RestaurantRevenueSummaryReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueSummaryReportEntity[]= await this.restaurantRevenueSummaryReportService.spGetRpRestaurantRevenueSummary(
            restaurantRevenueSummaryReportQueryDTO.restaurant_id ,
            restaurantRevenueSummaryReportQueryDTO.restaurant_brand_id,
            restaurantRevenueSummaryReportQueryDTO.branch_id,
            restaurantRevenueSummaryReportQueryDTO.from_date_string,
            restaurantRevenueSummaryReportQueryDTO.to_date_string

        );
            response.setData(new RestaurantRevenueSummaryReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
