import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantRevenueByBrandReportResponse } from '../tms-restaurant-revenue-by-branch/tms-restaurant-revenue-by-branch.response/tms-restaurant-revenue-by-branch.response';
import { TmsRestaurantDetailFoodReportDto } from './tms-restaurant-detail-food.dto/tms-restaurant-detail-food.dto';
import { TmsRestaurantDetailFoodReportEntity } from './tms-restaurant-detail-food.entity/tms-restaurant-detail-food.entity';
import { TmsRestaurantDetailFoodReportResponse } from './tms-restaurant-detail-food.response/tms-restaurant-detail-food.response';
import { TmsRestaurantDetailFoodService } from './tms-restaurant-detail-food.service';

@Controller('api/tms-restaurant-detail-food')
export class TmsRestaurantDetailFoodController {
    constructor(
        private tmsRestaurantDetailFoodService: TmsRestaurantDetailFoodService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantDetailFoodReportDto: TmsRestaurantDetailFoodReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantDetailFoodReportDto.report_type
        ).getTimeType();
        
        let data: TmsRestaurantDetailFoodReportEntity[] = await this.tmsRestaurantDetailFoodService.spGRPRestaurantDetailFood(
            tmsRestaurantDetailFoodReportDto.restaurant_id,
            tmsRestaurantDetailFoodReportDto.restaurant_brand_id,
            tmsRestaurantDetailFoodReportDto.branch_id,
            tmsRestaurantDetailFoodReportDto.type,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantDetailFoodReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
