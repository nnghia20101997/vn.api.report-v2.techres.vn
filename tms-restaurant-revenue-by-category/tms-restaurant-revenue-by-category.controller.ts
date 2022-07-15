import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantRevenueByCategoryReportDto } from './tms-restaurant-revenue-by-category.dto/tms-restaurant-revenue-by-category.dto';
import { TmsRestaurantRevenueByCategoryReportEntity } from './tms-restaurant-revenue-by-category.entity/tms-restaurant-revenue-by-category.entity';
import { TmsRestaurantRevenueByCategoryReportResponse } from './tms-restaurant-revenue-by-category.response/tms-restaurant-revenue-by-category.response';
import { TmsRestaurantRevenueByCategoryService } from './tms-restaurant-revenue-by-category.service';

@Controller('api/tms-restaurant-revenue-by-category')
export class TmsRestaurantRevenueByCategoryController {
    constructor(
        private tmsRestaurantRevenueByCategoryService: TmsRestaurantRevenueByCategoryService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantRevenueByCategoryReportDto: TmsRestaurantRevenueByCategoryReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueByCategoryReportDto.report_type
        ).getTimeType();
        
        let data: TmsRestaurantRevenueByCategoryReportEntity[] = await this.tmsRestaurantRevenueByCategoryService.spGRPRestaurantRevenueByCategory(
            tmsRestaurantRevenueByCategoryReportDto.restaurant_id,
            tmsRestaurantRevenueByCategoryReportDto.restaurant_brand_id,
            tmsRestaurantRevenueByCategoryReportDto.branch_id,
            tmsRestaurantRevenueByCategoryReportDto.category_type,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantRevenueByCategoryReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
