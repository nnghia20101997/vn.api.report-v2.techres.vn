import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { TmsRestaurantRevenueAdjacentReportDto } from './tms-restaurant-revenue-report.dto/tms-restaurant-revenue-adjacent-report.dto';
import { TmsRestaurantRevenueReportQueryDto } from './tms-restaurant-revenue-report.dto/tms-restaurant-revenue-report.dto';
import { TmsRestaurantRevenueSamePeriodReportDto } from './tms-restaurant-revenue-report.dto/tms-restaurant-revenue-same-period.dto';
import { TmsRestaurantRevenueAdjacentReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-adjacent-report.entity';
import { TmsRestaurantRevenueReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-report.entity';
import { TmsRestaurantRevenueSamePeriodReportEntity } from './tms-restaurant-revenue-report.entity/tms-restaurant-revenue-same-period.entity';
import { TmsRestaurantRevenueAdjacentReportOutputEntity } from './tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-adjacent-report.output.entity';
import { TmsRestaurantRevenueReportOutputEntity } from './tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-report.output.entity';
import { TmsRestaurantRevenueSamePeriodReportOutputEntity } from './tms-restaurant-revenue-report.output.entity/tms-restaurant-revenue-same-period.output.entity';
import { TmsRestaurantRevenueAdjacentReportOutputResponse } from './tms-restaurant-revenue-report.output.response/tms-restaurant-revenue-adjacent-report.output.response';
import { TmsRestauranRevenueReportOutputResponse } from './tms-restaurant-revenue-report.output.response/tms-restaurant-revenue-report.output.response';
import { TmsRestaurantRevenueSamePeriodReportOutputResponse } from './tms-restaurant-revenue-report.output.response/tms-restaurant-revenue-same-period.output.response';
import { TmsRestaurantRevenueAdjacentReportResponse } from './tms-restaurant-revenue-report.response/tms-restaurant-revenue-adjacent-report.response';
import { TmsRestaurantRevenueReportResponse } from './tms-restaurant-revenue-report.response/tms-restaurant-revenue-report.response';
import { TmsRestaurantRevenueSamePeriodReportResponse } from './tms-restaurant-revenue-report.response/tms-restaurant-revenue-same-period.response';
import { TmsRestaurantRevenueReportService } from './tms-restaurant-revenue-report.service';

@Controller('api/tms-restaurant-revenue-report')
export class TmsRestaurantRevenueReportController {

    constructor(
        private tmsRestaurantRevenueReportService: TmsRestaurantRevenueReportService,
    ) {}
    
    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGTmsCustomerReport (
        @Query() tmsRestaurantRevenueReportQueryDto: TmsRestaurantRevenueReportQueryDto,
        @Res() res: Response
    ): Promise<any>{
        let response: ResponseData = new ResponseData(); 

        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueReportQueryDto.report_type
          ).getTimeType();
          
        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueReportEntity, TmsRestaurantRevenueReportOutputEntity
        > = await this.tmsRestaurantRevenueReportService.spGTmsRestauranRevenueReport(
            tmsRestaurantRevenueReportQueryDto.restaurant_id,
            tmsRestaurantRevenueReportQueryDto.restaurant_brand_id,
            tmsRestaurantRevenueReportQueryDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestauranRevenueReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);

    }

    @Get("/adjacent")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantRevenueAdjacent(
        @Query() tmsRestaurantRevenueAdjacentReportDto : TmsRestaurantRevenueAdjacentReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueAdjacentReportDto.report_type
        ).getTimeType();

        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueAdjacentReportEntity, TmsRestaurantRevenueAdjacentReportOutputEntity
        >  = await this.tmsRestaurantRevenueReportService.spGRPRestaurantRevenueAdjacent(
            tmsRestaurantRevenueAdjacentReportDto.restaurant_id,
            tmsRestaurantRevenueAdjacentReportDto.restaurant_brand_id,
            tmsRestaurantRevenueAdjacentReportDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantRevenueAdjacentReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);
    }

    @Get("same-period")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantRevenueSamePeriod(
        @Query() tmsRestaurantRevenueSamePeriodReportDto : TmsRestaurantRevenueSamePeriodReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueSamePeriodReportDto.report_type
        ).getTimeType();


        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantRevenueSamePeriodReportEntity, TmsRestaurantRevenueSamePeriodReportOutputEntity
        > = await this.tmsRestaurantRevenueReportService.spGRPRestaurantRevenueSamePeriod(
            tmsRestaurantRevenueSamePeriodReportDto.restaurant_id,
            tmsRestaurantRevenueSamePeriodReportDto.restaurant_brand_id,
            tmsRestaurantRevenueSamePeriodReportDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantRevenueSamePeriodReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);
    }
}
