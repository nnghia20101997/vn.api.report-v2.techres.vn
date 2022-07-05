import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantEmployeeTargetReportQueryDTO } from './restaurant-employee-target-report.dto/restaurant-employee-target-report.query.dto';
import { RestaurantEmployeeTargetReportEntity } from './restaurant-employee-target-report.entity/restaurant-employee-target-report.entity';
import { RestaurantEmployeeTargetReportResponse } from './restaurant-employee-target-report.response/restaurant-employee-target-report.response';
import { RestaurantEmployeeTargetReportService } from './restaurant-employee-target-report.service';

@Controller('api/restaurant-employee-target-report')
export class RestaurantEmployeeTargetReportController {
    constructor(
        private restaurantEmployeeTargetReportService: RestaurantEmployeeTargetReportService
    ) { }

    @Get("")
    async getRpRestaurantEmployeeTarget(@Query() restaurantEmployeeTargetReportQueryDTO : RestaurantEmployeeTargetReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantEmployeeTargetReportEntity[]= await this.restaurantEmployeeTargetReportService.spGetRpRestaurantEmployeeTarget(
            restaurantEmployeeTargetReportQueryDTO.restaurant_id ,
            restaurantEmployeeTargetReportQueryDTO.restaurant_brand_id,
            restaurantEmployeeTargetReportQueryDTO.branch_id,
            restaurantEmployeeTargetReportQueryDTO.from_date_string,
            restaurantEmployeeTargetReportQueryDTO.to_date_string

        );
            response.setData(new RestaurantEmployeeTargetReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
