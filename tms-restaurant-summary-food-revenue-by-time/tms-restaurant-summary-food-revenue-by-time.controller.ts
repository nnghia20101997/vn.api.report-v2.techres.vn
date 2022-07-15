import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantSummaryFoodRevenueByTimeReportDto } from './tms-restaurant-summary-food-revenue-by-time.dto/tms-restaurant-summary-food-revenue-by-time.dto';
import { TmsRestaurantSummaryFoodRevenueByTimeReportEntity } from './tms-restaurant-summary-food-revenue-by-time.entity/tms-restaurant-summary-food-revenue-by-time.entity';
import { TmsRestaurantSummaryFoodRevenueByTimeReportResponse } from './tms-restaurant-summary-food-revenue-by-time.response/tms-restaurant-summary-food-revenue-by-time.response';
import { TmsRestaurantSummaryFoodRevenueByTimeService } from './tms-restaurant-summary-food-revenue-by-time.service';

@Controller('api/tms-restaurant-summary-food-revenue-by-time')
export class TmsRestaurantSummaryFoodRevenueByTimeController {
    constructor(
        private tmsRestaurantSummaryFoodRevenueByTimeService: TmsRestaurantSummaryFoodRevenueByTimeService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantSummaryFoodRevenueByTimeReportDto: TmsRestaurantSummaryFoodRevenueByTimeReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.report_type
        ).getTimeType();


        let data: TmsRestaurantSummaryFoodRevenueByTimeReportEntity[] = await this.tmsRestaurantSummaryFoodRevenueByTimeService.spGRPRestaurantSummaryFoodRevenueByTime(
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.restaurant_id,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.restaurant_brand_id,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.branch_id,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.category_type,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.category_id,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.is_gift,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.is_combo,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.is_cancelled_food,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.is_take_away_food,
            tmsRestaurantSummaryFoodRevenueByTimeReportDto.is_goods,
            time.group_type,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantSummaryFoodRevenueByTimeReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
