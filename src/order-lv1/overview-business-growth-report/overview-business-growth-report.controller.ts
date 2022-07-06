import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantBusinessGrowthReportQueryDTO } from './overview-business-growth-report.dto/restaurant-business-growth-report.query.dto';
import { RestaurantBusinessGrowthSummaryReportQueryDTO } from './overview-business-growth-report.dto/restaurant-business-growth-summary-report.query.dto';
import { RestaurantBusinessGrowthReportEntity } from './overview-business-growth-report.entity/restaurant-business-growth-report.entity';
import { RestaurantBusinessGrowthSummaryReportEntity } from './overview-business-growth-report.entity/restaurant-business-growth-summary-report.entity';
import { RestaurantBusinessGrowthReportResponse } from './overview-business-growth-report.response/restaurant-business-growth-report.response';
import { RestaurantBusinessGrowthSummaryReportResponse } from './overview-business-growth-report.response/restaurant-business-growth-summary-report.response';
import { OverviewBusinessGrowthReportService } from './overview-business-growth-report.service';

@Controller('api/overview-business-growth-report')
export class OverviewBusinessGrowthReportController {
    
    constructor(
        private overviewBusinessGrowthReportService: OverviewBusinessGrowthReportService
    ) { }

    @Get("/restaurant-business-growth-report")
    async getRpRestaurantBusinessGrowth(@Query() restaurantBusinessGrowthReportQueryDTO : RestaurantBusinessGrowthReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantBusinessGrowthReportEntity[]= await this.overviewBusinessGrowthReportService.spGetRpRestaurantBusinessGrowth(
            restaurantBusinessGrowthReportQueryDTO.restaurant_id ,
            restaurantBusinessGrowthReportQueryDTO.restaurant_brand_id,
            restaurantBusinessGrowthReportQueryDTO.branch_id,
            restaurantBusinessGrowthReportQueryDTO.from_date_string,
            restaurantBusinessGrowthReportQueryDTO.to_date_string,
            restaurantBusinessGrowthReportQueryDTO.group_by_type

        );
            response.setData(new RestaurantBusinessGrowthReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }

    @Get("/restaurant-business-growth-summary-report")
    async getRpRestaurantBusinessGrowthSummary(@Query() restaurantBusinessGrowthSummaryReportQueryDTO : RestaurantBusinessGrowthSummaryReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantBusinessGrowthSummaryReportEntity= await this.overviewBusinessGrowthReportService.spGetRpRestaurantBusinessGrowthSummary(
            restaurantBusinessGrowthSummaryReportQueryDTO.restaurant_id ,
            restaurantBusinessGrowthSummaryReportQueryDTO.restaurant_brand_id,
            restaurantBusinessGrowthSummaryReportQueryDTO.branch_id,
            restaurantBusinessGrowthSummaryReportQueryDTO.from_date_string,
            restaurantBusinessGrowthSummaryReportQueryDTO.to_date_string,
            restaurantBusinessGrowthSummaryReportQueryDTO.group_by_type

        );
            response.setData(new RestaurantBusinessGrowthSummaryReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }
    
}
