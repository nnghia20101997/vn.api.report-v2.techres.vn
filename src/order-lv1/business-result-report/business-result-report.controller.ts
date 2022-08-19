import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantResultBusinessAndProfitReportQueryDTO } from './business-result-report.dto/restaurant-result-business-and-profit-report.query.dto';
import { RestaurantRevenueCostSummaryReportQueryDTO } from './business-result-report.dto/restaurant-revenue-cost-summary-report.query.dto';
import { RestaurantResultBusinessAndProfitReportEntity } from './business-result-report.entity/restaurant-result-business-and-profit-report.entity';
import { RestaurantRevenueCostSummaryReportEntity } from './business-result-report.entity/restaurant-revenue-cost-summary-report.entity';
import { RestaurantResultBusinessAndProfitReportResponse } from './business-result-report.response/restaurant-result-business-and-profit-report.reponse';
import { RestaurantRevenueCostSummaryReportResponse } from './business-result-report.response/restaurant-revenue-cost-summary-report.response';
import { BusinessResultReportService } from './business-result-report.service';

@Controller('api/business-result-report')
export class BusinessResultReportController {
    constructor(
        private businessResultReportService: BusinessResultReportService
    ) { }

    @Get("/restaurant-result-business-and-profit-report")
    async getRpRestaurantResultBusinessAndProfit(@Query() restaurantResultBusinessAndProfitReportQueryDTO : RestaurantResultBusinessAndProfitReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantResultBusinessAndProfitReportEntity[]= await this.businessResultReportService.spGetRpRestaurantResultBusinessAndProfit(
            restaurantResultBusinessAndProfitReportQueryDTO.restaurant_id ,
            restaurantResultBusinessAndProfitReportQueryDTO.restaurant_brand_id,
            restaurantResultBusinessAndProfitReportQueryDTO.branch_id,
            restaurantResultBusinessAndProfitReportQueryDTO.from_date_string,
            restaurantResultBusinessAndProfitReportQueryDTO.to_date_string,
            restaurantResultBusinessAndProfitReportQueryDTO.group_by_type

        );
            response.setData(new RestaurantResultBusinessAndProfitReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }

    @Get("/restaurant-revenue-cost-summary-report")
    async getRpRestaurantRevenueCostSummary(@Query() restaurantRevenueCostSummaryReportQueryDTO : RestaurantRevenueCostSummaryReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueCostSummaryReportEntity[]= await this.businessResultReportService.spGetRpRestaurantRevenueCostSummary(
            restaurantRevenueCostSummaryReportQueryDTO.restaurant_id ,
            restaurantRevenueCostSummaryReportQueryDTO.restaurant_brand_id,
            restaurantRevenueCostSummaryReportQueryDTO.branch_id,
            restaurantRevenueCostSummaryReportQueryDTO.addition_fee_reason_type_id,
            restaurantRevenueCostSummaryReportQueryDTO.from_date_string,
            restaurantRevenueCostSummaryReportQueryDTO.to_date_string,
            restaurantRevenueCostSummaryReportQueryDTO.group_by_type

        );
            response.setData(new RestaurantRevenueCostSummaryReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
