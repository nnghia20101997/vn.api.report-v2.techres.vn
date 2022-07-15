import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantRevenueByAreaReportDto } from './tms-restaurant-revenue-by-area-report.dto/tms-restaurant-revenue-by-area-report.dto';
import { TmsRestaurantRevenueByAreaReportEntity } from './tms-restaurant-revenue-by-area-report.entity/tms-restaurant-revenue-by-area-report.entity';
import { TmsRestaurantRevenueByAreaReportResponse } from './tms-restaurant-revenue-by-area-report.response/tms-restaurant-revenue-by-area-report.response';
import { TmsRestaurantRevenueByAreaReportService } from './tms-restaurant-revenue-by-area-report.service';

@Controller('api/tms-restaurant-revenue-by-area-report')
export class TmsRestaurantRevenueByAreaReportController {
    constructor(
        private tmsRestaurantRevenueByAreaReportService: TmsRestaurantRevenueByAreaReportService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantRevenueByAreaReportDto: TmsRestaurantRevenueByAreaReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueByAreaReportDto.report_type
        ).getTimeType();

        let data: TmsRestaurantRevenueByAreaReportEntity[] = await this.tmsRestaurantRevenueByAreaReportService.spGRPRestaurantRevenueByArea(
            tmsRestaurantRevenueByAreaReportDto.branch_id,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantRevenueByAreaReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
