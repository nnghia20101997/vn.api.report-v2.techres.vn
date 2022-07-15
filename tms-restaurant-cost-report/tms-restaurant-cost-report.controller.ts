import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { TmsRestaurantCostAdjacentReportDto } from './tms-restaurant-cost-report.dto/tms-restaurant-cost-adjacent-report.dto';
import { TmsRestaurantCostReportDto } from './tms-restaurant-cost-report.dto/tms-restaurant-cost-report.dto';
import { TmsRestaurantCostSamePeriodReportDto } from './tms-restaurant-cost-report.dto/tms-restaurant-cost-same-period-report.dto';
import { TmsRestaurantCostAdjacentReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-adjacent-report.entity';
import { TmsRestaurantCostReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-report.entity';
import { TmsRestaurantCostSamePeriodReportEntity } from './tms-restaurant-cost-report.entity/tms-restaurant-cost-same-period-report.entity';
import { TmsRestaurantCostAdjacentReportOutputEntity } from './tms-restaurant-cost-report.output.entity/tms-restaurant-cost-adjacent-report.output.entity';
import { TmsRestaurantCostReportOutputEntity } from './tms-restaurant-cost-report.output.entity/tms-restaurant-cost-report.output.entity';
import { TmsRestaurantCostSamePeriodReportOutputEntity } from './tms-restaurant-cost-report.output.entity/tms-restaurant-cost-same-period-report.output.entity';
import { TmsRestaurantCostAdjacentReportOutputResponse } from './tms-restaurant-cost-report.output.response/tms-restaurant-cost-adjacent-report.output.response';
import { TmsRestaurantCostReportOutputResponse } from './tms-restaurant-cost-report.output.response/tms-restaurant-cost-report.output.response';
import { TmsRestaurantCostSamePeriodReportOutputResponse } from './tms-restaurant-cost-report.output.response/tms-restaurant-cost-same-period-report.output.response';
import { TmsRestaurantCostAdjacentReportResponse } from './tms-restaurant-cost-report.response/tms-restaurant-cost-adjacent-report.response';
import { TmsRestaurantCostReportResponse } from './tms-restaurant-cost-report.response/tms-restaurant-cost-report.response';
import { TmsRestaurantCostSamePeriodReportResponse } from './tms-restaurant-cost-report.response/tms-restaurant-cost-same-period-report.response';
import { TmsRestaurantCostReportService } from './tms-restaurant-cost-report.service';

@Controller('api/tms-restaurant-cost-report')
export class TmsRestaurantCostReportController {
    constructor(
        private tmsRestaurantCostReportService: TmsRestaurantCostReportService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spRestauranCostReport (
        @Query() tmsRestaurantCostReportDto: TmsRestaurantCostReportDto,
        @Res() res: Response
    ) : Promise<any>{
       
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantCostReportDto.report_type
          ).getTimeType();

        let data: StoreProcedureOutputResultInterface<TmsRestaurantCostReportEntity, TmsRestaurantCostReportOutputEntity> = await this.tmsRestaurantCostReportService.spGRRestaurantCost(
            tmsRestaurantCostReportDto.restaurant_id,
            tmsRestaurantCostReportDto.restaurant_brand_id,
            tmsRestaurantCostReportDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantCostReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);

    }

    @Get("same-period")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantCostSamePeriod(
        @Query() tmsRestaurantCostSamePeriodReportDto: TmsRestaurantCostSamePeriodReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();

        let time = new StoreProcedureGetTimeDatabase(tmsRestaurantCostSamePeriodReportDto.report_type).getTimeType();
        
        let data: StoreProcedureOutputResultInterface<
        TmsRestaurantCostSamePeriodReportEntity,TmsRestaurantCostSamePeriodReportOutputEntity
            > = await this.tmsRestaurantCostReportService.spGRPRestaurantCostSamePeriod(
            tmsRestaurantCostSamePeriodReportDto.restaurant_id,
            tmsRestaurantCostSamePeriodReportDto.restaurant_brand_id,
            tmsRestaurantCostSamePeriodReportDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantCostSamePeriodReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response)
    }

    @Get("adjacent")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantCostAdjacent(
        @Query() tmsRestaurantCostAdjacentReportDto: TmsRestaurantCostAdjacentReportDto,
        @Res() res: Response
    ): Promise<any> {

        let response: ResponseData = new ResponseData();

        let time = new StoreProcedureGetTimeDatabase(tmsRestaurantCostAdjacentReportDto.report_type).getTimeType();

        let result: StoreProcedureOutputResultInterface<TmsRestaurantCostAdjacentReportEntity, TmsRestaurantCostAdjacentReportOutputEntity> = await this.tmsRestaurantCostReportService.spGRPRestaurantCostAdjacent(
            tmsRestaurantCostAdjacentReportDto.restaurant_id,
            tmsRestaurantCostAdjacentReportDto.restaurant_brand_id,
            tmsRestaurantCostAdjacentReportDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        console.log(result.output);
        

        response.setData(new TmsRestaurantCostAdjacentReportOutputResponse(result.list, result.output));

        return res.status(HttpStatus.OK).send(response);
    }
}
