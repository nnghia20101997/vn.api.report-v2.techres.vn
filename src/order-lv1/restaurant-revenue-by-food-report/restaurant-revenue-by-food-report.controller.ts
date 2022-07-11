import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantRevenueByFoodReportQueryDTO } from './restaurant-revenue-by-food-report.dto/restaurant-revenue-by-food-report.query.dto';
import { RestaurantRevenueByFoodReportEntity } from './restaurant-revenue-by-food-report.entity/restaurant-revenue-by-food-report.entity';
import { RestaurantRevenueByFoodReportResponse } from './restaurant-revenue-by-food-report.response/restaurant-revenue-by-food-report.response';
import { RestaurantRevenueByFoodReportService } from './restaurant-revenue-by-food-report.service';

@Controller('api/restaurant-revenue-by-food-report')
export class RestaurantRevenueByFoodReportController {
    constructor(
        private restaurantRevenueByFoodReportService: RestaurantRevenueByFoodReportService
    ) { }

    @Get("")
    async getRpRestaurantRevenue_by_food(@Query() restaurantRevenueByFoodReportQueryDTO: RestaurantRevenueByFoodReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result: RestaurantRevenueByFoodReportEntity[] = await this.restaurantRevenueByFoodReportService.spGetRpRestaurantRevenueByFood(
            restaurantRevenueByFoodReportQueryDTO.restaurant_id,
            restaurantRevenueByFoodReportQueryDTO.restaurant_brand_id,
            restaurantRevenueByFoodReportQueryDTO.branch_id,
            restaurantRevenueByFoodReportQueryDTO.category_type_string,
            restaurantRevenueByFoodReportQueryDTO.category_id,
            restaurantRevenueByFoodReportQueryDTO.is_gift,
            restaurantRevenueByFoodReportQueryDTO.is_combo,
            restaurantRevenueByFoodReportQueryDTO.is_cancelled_food,
            restaurantRevenueByFoodReportQueryDTO.is_take_away_food,
            restaurantRevenueByFoodReportQueryDTO.is_goods,
            restaurantRevenueByFoodReportQueryDTO.from_date_string,
            restaurantRevenueByFoodReportQueryDTO.to_date_string

        );
        response.setData(new RestaurantRevenueByFoodReportResponse().mapToList(result));
        return res.status(HttpStatus.OK).send(response);
    }
}
