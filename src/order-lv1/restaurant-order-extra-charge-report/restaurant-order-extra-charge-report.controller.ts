import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantOrderExtraChargeReportQueryDTO } from './restaurant-order-extra-charge-report.dto/restaurant-order-extra-charge-report.query.dto';
import { RestaurantOrderExtraChargeReportEntity } from './restaurant-order-extra-charge-report.entity/restaurant-order-extra-charge-report.entity';
import { RestaurantOrderExtraChargeReportResponse } from './restaurant-order-extra-charge-report.response/restaurant-order-extra-charge-report.response';
import { RestaurantOrderExtraChargeReportService } from './restaurant-order-extra-charge-report.service';

@Controller('api/restaurant-order-extra-charge-report')
export class RestaurantOrderExtraChargeReportController {
    constructor(
        private restaurantOrderExtraChargeReportService: RestaurantOrderExtraChargeReportService
    ) { }

    @Get("")
    async getRpRestaurantOrderExtraCharge(@Query() restaurantOrderExtraChargeReportQueryDTO : RestaurantOrderExtraChargeReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantOrderExtraChargeReportEntity[]= await this.restaurantOrderExtraChargeReportService.spGetRpRestaurantOrderExtraCharge(
            restaurantOrderExtraChargeReportQueryDTO.restaurant_id ,
            restaurantOrderExtraChargeReportQueryDTO.restaurant_brand_id,
            restaurantOrderExtraChargeReportQueryDTO.branch_id,
            restaurantOrderExtraChargeReportQueryDTO.group_by_type,
            restaurantOrderExtraChargeReportQueryDTO.from_date_string,
            restaurantOrderExtraChargeReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantOrderExtraChargeReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
