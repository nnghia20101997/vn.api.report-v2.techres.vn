import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantRevenueByCategoryReportQueryDTO } from './restaurant-revenue-by-category-report.dto/restaurant-revenue-by-category-report.query.dto';
import { RestaurantRevenueByCategoryReportEntity } from './restaurant-revenue-by-category-report.entity/restaurant-revenue-by-category-report.entity';
import { RestaurantRevenueByCategoryReportResponse } from './restaurant-revenue-by-category-report.response/restaurant-revenue-by-category-report.response';
import { RestaurantRevenueByCategoryReportService } from './restaurant-revenue-by-category-report.service';

@Controller('api/restaurant-revenue-by-category-report')
export class RestaurantRevenueByCategoryReportController {
    constructor(
        private restaurantRevenueByCategoryReportService: RestaurantRevenueByCategoryReportService
    ) { }

    @Get("")
    async getRpRestaurantRevenueByCategory(@Query() restaurantRevenueByCategoryReportQueryDTO: RestaurantRevenueByCategoryReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result: RestaurantRevenueByCategoryReportEntity[] = await this.restaurantRevenueByCategoryReportService.spGetRpRestaurantRevenueByCategory(
            restaurantRevenueByCategoryReportQueryDTO.restaurant_id,
            restaurantRevenueByCategoryReportQueryDTO.restaurant_brand_id,
            restaurantRevenueByCategoryReportQueryDTO.branch_id,
            restaurantRevenueByCategoryReportQueryDTO.category_type,
            restaurantRevenueByCategoryReportQueryDTO.from_date_string,
            restaurantRevenueByCategoryReportQueryDTO.to_date_string

        );
        response.setData(new RestaurantRevenueByCategoryReportResponse().mapToList(result));
        return res.status(HttpStatus.OK).send(response);
    }
}
