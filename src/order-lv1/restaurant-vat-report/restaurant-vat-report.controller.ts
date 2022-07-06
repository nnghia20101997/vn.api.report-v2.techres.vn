import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantVatReportQueryDTO } from './restaurant-vat-report.dto/restaurant-vat-report.query.dto';
import { RestaurantVatReportEntity } from './restaurant-vat-report.entity/restaurant-vat-report.entity';
import { RestaurantVatReportResponse } from './restaurant-vat-report.response/restaurant-vat-report.response';
import { RestaurantVatReportService } from './restaurant-vat-report.service';

@Controller('api/restaurant-vat-report')
export class RestaurantVatReportController {
    constructor(
        private restaurantVatReportService: RestaurantVatReportService
    ) { }

    @Get("")
    async getRpRestaurantVat(@Query() restaurantVatReportQueryDTO : RestaurantVatReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantVatReportEntity[]= await this.restaurantVatReportService.spGetRpRestaurantVat(
            restaurantVatReportQueryDTO.restaurant_id ,
            restaurantVatReportQueryDTO.restaurant_brand_id,
            restaurantVatReportQueryDTO.branch_id,
            restaurantVatReportQueryDTO.from_date_string,
            restaurantVatReportQueryDTO.to_date_string,
            restaurantVatReportQueryDTO.group_by_type

        );
            response.setData(new RestaurantVatReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }

}
