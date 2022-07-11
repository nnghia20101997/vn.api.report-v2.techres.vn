import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantDetailFoodReportQueryDTO } from './restaurant-detail-food-report.dto/restaurant-detail-food-report.query.dto';
import { RestaurantDetailFoodReportEntity } from './restaurant-detail-food-report.entity/restaurant-detail-food-report.entity';
import { RestaurantDetailFoodReportResponse } from './restaurant-detail-food-report.response/restaurant-detail-food-report.response';
import { RestaurantDetailFoodReportService } from './restaurant-detail-food-report.service';
@Controller('api/restaurant-detail-food-report')
export class RestaurantDetailFoodReportController {
    constructor(
        private restaurantDetailFoodReportService: RestaurantDetailFoodReportService
    ) { }

    @Get("")
    async getRpRestaurantProfitReality(@Query() entityQueryDTO: RestaurantDetailFoodReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result: RestaurantDetailFoodReportEntity[] = await this.restaurantDetailFoodReportService.spGetRpRestaurantDetailFood(
            entityQueryDTO.restaurant_id,
            entityQueryDTO.restaurant_brand_id,
            entityQueryDTO.branch_id,
            entityQueryDTO.type,
            entityQueryDTO.from_date_string,
            entityQueryDTO.to_date_string

        );
        response.setData(new RestaurantDetailFoodReportResponse().mapToList(result));
        return res.status(HttpStatus.OK).send(response);
    }
}
