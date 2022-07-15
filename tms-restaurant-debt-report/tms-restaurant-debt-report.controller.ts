import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantDebtReportDto } from './tms-restaurant-debt-report.dto/tms-restaurant-debt-report.dto';
import { TmsRestaurantDebtReportEntity } from './tms-restaurant-debt-report.entity/tms-restaurant-debt-report.entity';
import { TmsRestaurantDebtReportResponse } from './tms-restaurant-debt-report.response/tms-restaurant-debt-report.response';
import { TmsRestaurantDebtReportService } from './tms-restaurant-debt-report.service';

@Controller('api/tms-restaurant-debt-report')
export class TmsRestaurantDebtReportController {
    constructor(
        private tmsRestaurantDebtReportService: TmsRestaurantDebtReportService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantDebtReportDto: TmsRestaurantDebtReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantDebtReportDto.report_type
        ).getTimeType();

        let data: TmsRestaurantDebtReportEntity = await this.tmsRestaurantDebtReportService.spGRPRestaurantDebt(
            tmsRestaurantDebtReportDto.restaurant_id,
            tmsRestaurantDebtReportDto.restaurant_brand_id,
            tmsRestaurantDebtReportDto.branch_id,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantDebtReportResponse(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
