import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantProfitRealityReportQueryDTO } from './restaurant-profit-reality-report.dto/restaurant-profit-reality-report.query.dto';
import { RestaurantProfitRealityReportEntity } from './restaurant-profit-reality-report.entity/restaurant-profit-reality-report.entity';
import { RestaurantProfitRealityReportResponse } from './restaurant-profit-reality-report.response/restaurant-profit-reality-report.response';
import { RestaurantProfitRealityReportService } from './restaurant-profit-reality-report.service';
@Controller('api/restaurant-profit-reality-report')
export class RestaurantProfitRealityReportController {
    constructor(
        private restaurantProfitRealityReportService: RestaurantProfitRealityReportService
    ) { }

    @Get("")
    async getRpRestaurantProfitReality(@Query() entityQueryDTO : RestaurantProfitRealityReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantProfitRealityReportEntity= await this.restaurantProfitRealityReportService.spGetRpRestaurantProfitReality(
            entityQueryDTO.restaurant_id ,
            entityQueryDTO.restaurant_brand_id,
            entityQueryDTO.branch_id,
            entityQueryDTO.from_date_string,
            entityQueryDTO.to_date_string

        );
            response.setData(new RestaurantProfitRealityReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
