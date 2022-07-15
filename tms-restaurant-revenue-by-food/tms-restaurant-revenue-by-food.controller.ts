import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantRevenueByFoodReportDto } from './tms-restaurant-revenue-by-food.dto/tms-restaurant-revenue-by-food.dto';
import { TmsRestaurantRevenueByFoodReportEntity } from './tms-restaurant-revenue-by-food.entity/tms-restaurant-revenue-by-food.entity';
import { TmsRestaurantRevenueByFoodReportResponse } from './tms-restaurant-revenue-by-food.response/tms-restaurant-revenue-by-food.response';
import { TmsRestaurantRevenueByFoodService } from './tms-restaurant-revenue-by-food.service';

@Controller('api/tms-restaurant-revenue-by-food')
export class TmsRestaurantRevenueByFoodController {
    constructor(
        private tmsRestaurantRevenueByFoodService: TmsRestaurantRevenueByFoodService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantRevenueByFoodReportDto: TmsRestaurantRevenueByFoodReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueByFoodReportDto.report_type
        ).getTimeType();

        console.log(tmsRestaurantRevenueByFoodReportDto.restaurant_id,
            tmsRestaurantRevenueByFoodReportDto.restaurant_brand_id,
            tmsRestaurantRevenueByFoodReportDto.branch_id,
            tmsRestaurantRevenueByFoodReportDto.category_type,
            tmsRestaurantRevenueByFoodReportDto.category_id,
            tmsRestaurantRevenueByFoodReportDto.is_gift,
            tmsRestaurantRevenueByFoodReportDto.is_combo,
            tmsRestaurantRevenueByFoodReportDto.is_cancelled_food,
            tmsRestaurantRevenueByFoodReportDto.is_take_away_food,
            tmsRestaurantRevenueByFoodReportDto.is_goods,
            time.from_date,
            time.to_date);
        

        let data: TmsRestaurantRevenueByFoodReportEntity[] = await this.tmsRestaurantRevenueByFoodService.spGRPRestaurantRevenueByFood(
            tmsRestaurantRevenueByFoodReportDto.restaurant_id,
            tmsRestaurantRevenueByFoodReportDto.restaurant_brand_id,
            tmsRestaurantRevenueByFoodReportDto.branch_id,
            tmsRestaurantRevenueByFoodReportDto.category_type,
            tmsRestaurantRevenueByFoodReportDto.category_id,
            tmsRestaurantRevenueByFoodReportDto.is_gift,
            tmsRestaurantRevenueByFoodReportDto.is_combo,
            tmsRestaurantRevenueByFoodReportDto.is_cancelled_food,
            tmsRestaurantRevenueByFoodReportDto.is_take_away_food,
            tmsRestaurantRevenueByFoodReportDto.is_goods,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantRevenueByFoodReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
