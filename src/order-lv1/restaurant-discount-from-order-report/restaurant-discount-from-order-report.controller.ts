import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantDiscountFromOrderReportQueryDTO } from './restaurant-discount-from-order-report.dto/restaurant-discount-from-order-report.query.dto';
import { RestaurantDiscountFromOrderReportEntity } from './restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity';
import { RestaurantDiscountFromOrderReportResponse } from './restaurant-discount-from-order-report.response/restaurant-discount-from-order-report.response';
import { RestaurantDiscountFromOrderReportService } from './restaurant-discount-from-order-report.service';

@Controller('api/restaurant-discount-from-order-report')
export class RestaurantDiscountFromOrderReportController {

    constructor(
        private restaurantDiscountFromOrderReportService: RestaurantDiscountFromOrderReportService
    ) { }
    
    @Get("")
    async getRpRestaurantDiscountFromOrder(@Query() restaurantDiscountFromOrderReportQueryDTO : RestaurantDiscountFromOrderReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantDiscountFromOrderReportEntity[]= await this.restaurantDiscountFromOrderReportService.spGetRpRestaurantDiscountFromOrder(
            restaurantDiscountFromOrderReportQueryDTO.restaurant_id ,
            restaurantDiscountFromOrderReportQueryDTO.restaurant_brand_id,
            restaurantDiscountFromOrderReportQueryDTO.branch_id,
            restaurantDiscountFromOrderReportQueryDTO.group_by_type,
            restaurantDiscountFromOrderReportQueryDTO.from_date_string,
            restaurantDiscountFromOrderReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantDiscountFromOrderReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }

}
