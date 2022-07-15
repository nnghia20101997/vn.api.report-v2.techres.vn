import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantRevenueDetailByRestaurantBrandReportDto } from './tms-restaurant-revenue-detail-by-restaurant-brand.dto/tms-restaurant-revenue-detail-by-restaurant-brand.dto';
import { TmsRestaurantRevenueDetailByRestaurantBrandReportEntity } from './tms-restaurant-revenue-detail-by-restaurant-brand.entity/tms-restaurant-revenue-detail-by-restaurant-brand.entity';
import { TmsRestaurantRevenueDetailByRestaurantBrandReportResponse } from './tms-restaurant-revenue-detail-by-restaurant-brand.response/tms-restaurant-revenue-detail-by-restaurant-brand.response';
import { TmsRestaurantRevenueDetailByRestaurantBrandService } from './tms-restaurant-revenue-detail-by-restaurant-brand.service';


//Restaurant - Báo cáo doanh thu hằng ngày theo thương hiệu
@Controller('api/tms-restaurant-revenue-detail-by-restaurant-brand')
export class TmsRestaurantRevenueDetailByRestaurantBrandController {
    constructor(
        private tmsRestaurantRevenueDetailByRestaurantBrandService: TmsRestaurantRevenueDetailByRestaurantBrandService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantRevenueDetailByRestaurantBrandReportDto: TmsRestaurantRevenueDetailByRestaurantBrandReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueDetailByRestaurantBrandReportDto.report_type
        ).getTimeType();

        let data: TmsRestaurantRevenueDetailByRestaurantBrandReportEntity[] = await this.tmsRestaurantRevenueDetailByRestaurantBrandService.spGRPRestaurantRevenueDetailByRestaurantBrand(
            tmsRestaurantRevenueDetailByRestaurantBrandReportDto.restaurant_id,
            tmsRestaurantRevenueDetailByRestaurantBrandReportDto.restaurant_brand_id,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantRevenueDetailByRestaurantBrandReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
