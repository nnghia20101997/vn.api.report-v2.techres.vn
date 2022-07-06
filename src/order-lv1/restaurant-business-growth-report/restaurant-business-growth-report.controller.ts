import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantBusinessGrowthReportQueryDTO } from './restaurant-business-growth-report.dto/restaurant-business-growth-report.query.dto';
import { RestaurantBusinessGrowthReportEntity } from './restaurant-business-growth-report.entity/restaurant-business-growth-report.entity';
import { RestaurantBusinessGrowthReportResponse } from './restaurant-business-growth-report.response/restaurant-business-growth-report.response';
import { RestaurantBusinessGrowthReportService } from './restaurant-business-growth-report.service';
@Controller('api/restaurant-business-growth-report')
export class RestaurantBusinessGrowthReportController {
    constructor(
        private restaurantBusinessGrowthReportService: RestaurantBusinessGrowthReportService
    ) { }

    @Get("")
    async getRpRestaurantBusinessGrowth(@Query() restaurantBusinessGrowthReportQueryDTO : RestaurantBusinessGrowthReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantBusinessGrowthReportEntity[]= await this.restaurantBusinessGrowthReportService.spGetRpRestaurantBusinessGrowth(
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
}
