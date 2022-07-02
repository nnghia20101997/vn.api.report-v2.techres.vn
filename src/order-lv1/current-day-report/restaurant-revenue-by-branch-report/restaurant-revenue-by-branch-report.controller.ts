import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantRevenueByBranchReportQueryDTO } from './restaurant-revenue-by-branch-report.dto/restaurant-revenue-by-branch-report.query.dto';
import { RestaurantRevenueByBranchReportEntity } from './restaurant-revenue-by-branch-report.entity/restaurant-revenue-by-branch-report.entity';
import { RestaurantRevenueByBranchReportResponse } from './restaurant-revenue-by-branch-report.response/restaurant-revenue-by-branch-report.response';
import { RestaurantRevenueByBranchReportService } from './restaurant-revenue-by-branch-report.service';
import { Response } from 'express';

@Controller('api/current-day-report')
export class RestaurantRevenueByBranchReportController {

    constructor(
        private restaurantRevenueByBranchReportService: RestaurantRevenueByBranchReportService
    ) { }
    

    @Get("/restaurant-revenue-by-branch")
    async getRpRestaurantRevenueByBranch(@Query() restaurantRevenueByBranchReportQueryDTO : RestaurantRevenueByBranchReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueByBranchReportEntity[]= await this.restaurantRevenueByBranchReportService.spGetRpRestaurantRevenueByBranch(
            restaurantRevenueByBranchReportQueryDTO.restaurant_id ,
            restaurantRevenueByBranchReportQueryDTO.restaurant_brand_id,
            restaurantRevenueByBranchReportQueryDTO.branch_id,
            restaurantRevenueByBranchReportQueryDTO.from_date_string,
            restaurantRevenueByBranchReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantRevenueByBranchReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }

}
