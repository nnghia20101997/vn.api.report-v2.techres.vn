import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantRevenueDetailByRestaurantBrandReportQueryDTO } from './restaurant-revenue-detail-by-restaurant-brand-report.dto/restaurant-revenue-detail-by-restaurant-b.query.dto';
import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from './restaurant-revenue-detail-by-restaurant-brand-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity';
import { RestaurantRevenueDetailByRestaurantBrandReportResponse } from './restaurant-revenue-detail-by-restaurant-brand-report.response/restaurant-revenue-detail-by-restaurant-brand-report.response';
import { RestaurantRevenueDetailByRestaurantBrandReportService } from './restaurant-revenue-detail-by-restaurant-brand-report.service';
import { Response } from 'express';

@Controller('api/current-day-report')
export class RestaurantRevenueDetailByRestaurantBrandReportController {
    constructor(
        private restaurantRevenueDetailByRestaurantBrandReportService: RestaurantRevenueDetailByRestaurantBrandReportService,
    ) { }

    @Get("/restaurant-revenue-detail-by-restaurant-brand")
    async getRpRestaurantRevenueDetailByRestaurantBrand(@Query() restaurantRevenueDetailByRestaurantBrandReportQueryDTO : RestaurantRevenueDetailByRestaurantBrandReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueDetailByRestaurantBrandReportEntity= await this.restaurantRevenueDetailByRestaurantBrandReportService.spGetRpRestaurantRevenueDetailByRestaurantBrand(
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.restaurant_id ,
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.restaurant_brand_id,
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.from_date_string,
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantRevenueDetailByRestaurantBrandReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
