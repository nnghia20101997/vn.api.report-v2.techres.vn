import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantProfitDebtAmountSummaryReportQueryDTO } from './restaurant-profit-debt-amount-summary-report.dto/restaurant-profit-debt-amount-summary-report.query.dto';
import { RestaurantProfitDebtAmountSummaryReportEntity } from './restaurant-profit-debt-amount-summary-report.entity/restaurant-profit-debt-amount-summary-report.entity';
import { RestaurantProfitDebtAmountSummaryReportResponse } from './restaurant-profit-debt-amount-summary-report.respone/restaurant-profit-debt-amount-summary-report.response';
import { RestaurantProfitDebtAmountSummaryReportService } from './restaurant-profit-debt-amount-summary-report.service';

@Controller('api/restaurant-profit-debt-amount-summary-report')
export class RestaurantProfitDebtAmountSummaryReportController {

    constructor(
        private restaurantProfitDebtAmountSummaryReportService: RestaurantProfitDebtAmountSummaryReportService
    ) { }

    @Get("")
    async getRpRestaurantProfitDebtAmountSummary(@Query() restaurantProfitDebtAmountSummaryReportQueryDTO : RestaurantProfitDebtAmountSummaryReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantProfitDebtAmountSummaryReportEntity[]= await this.restaurantProfitDebtAmountSummaryReportService.spGetRpRestaurantProfitDebtAmountSummary(
            restaurantProfitDebtAmountSummaryReportQueryDTO.restaurant_id ,
            restaurantProfitDebtAmountSummaryReportQueryDTO.restaurant_brand_id,
            restaurantProfitDebtAmountSummaryReportQueryDTO.branch_id,
            restaurantProfitDebtAmountSummaryReportQueryDTO.from_date_string,
            restaurantProfitDebtAmountSummaryReportQueryDTO.to_date_string

        );
            response.setData(new RestaurantProfitDebtAmountSummaryReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
