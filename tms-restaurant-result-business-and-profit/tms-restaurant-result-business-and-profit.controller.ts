import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { TmsRestaurantResultBusinessAndProfitDto } from './tms-restaurant-result-business-and-profit.dto/tms-restaurant-result-business-and-profit.dto';
import { TmsRestaurantResultBusinessAndProfitAdjacentReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-adjacent.entity';
import { TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit-same-period.entity';
import { TmsRestaurantResultBusinessAndProfitReportEntity } from './tms-restaurant-result-business-and-profit.entity/tms-restaurant-result-business-and-profit.entity';
import { TmsRestaurantResultBusinessAndProfitAdjacentReportOutputEntity } from './tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit-adjacent.output.entity';
import { TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputEntity } from './tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit-same-period.output.entity';
import { TmsRestaurantResultBusinessAndProfitReportOutputEntity } from './tms-restaurant-result-business-and-profit.output.entity/tms-restaurant-result-business-and-profit.output.entity';
import { RestaurantResultBusinessAndProfitAdjacentReportOutputResponse } from './tms-restaurant-result-business-and-profit.output.response/tms-restaurant-result-business-and-profit-adjacent.output.response';
import { TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputResponse } from './tms-restaurant-result-business-and-profit.output.response/tms-restaurant-result-business-and-profit-same-period.output.response';
import { RestaurantResultBusinessAndProfitReportOutputResponse } from './tms-restaurant-result-business-and-profit.output.response/tms-restaurant-result-business-and-profit.output.response';
import { TmsRestaurantResultBusinessAndProfitService } from './tms-restaurant-result-business-and-profit.service';

@Controller('api/tms-restaurant-result-business-and-profit')
export class TmsRestaurantResultBusinessAndProfitController {
    constructor(
        private tmsRestaurantResultBusinessAndProfitService: TmsRestaurantResultBusinessAndProfitService,
    ) {}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPCustomerReport (
        @Query() tmsRestaurantResultBusinessAndProfitDto: TmsRestaurantResultBusinessAndProfitDto,
        @Res() res: Response
    ): Promise<any>{
        let response: ResponseData = new ResponseData(); 

        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantResultBusinessAndProfitDto.report_type
          ).getTimeType();
          
        let data: StoreProcedureOutputResultInterface<
            TmsRestaurantResultBusinessAndProfitReportEntity, TmsRestaurantResultBusinessAndProfitReportOutputEntity
        > = await this.tmsRestaurantResultBusinessAndProfitService.spGRPRestaurantResultBusinessAndProfit(
            tmsRestaurantResultBusinessAndProfitDto.restaurant_id,
            tmsRestaurantResultBusinessAndProfitDto.restaurant_brand_id,
            tmsRestaurantResultBusinessAndProfitDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new RestaurantResultBusinessAndProfitReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);

    }


    @Get("adjacent")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantResultBusinessAndProfitAdjacent (
        @Query() tmsRestaurantResultBusinessAndProfitDto: TmsRestaurantResultBusinessAndProfitDto,
        @Res() res: Response
    ): Promise<any>{
        let response: ResponseData = new ResponseData(); 

        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantResultBusinessAndProfitDto.report_type
          ).getTimeType();
          
        let data: StoreProcedureOutputResultInterface<
        TmsRestaurantResultBusinessAndProfitAdjacentReportEntity, TmsRestaurantResultBusinessAndProfitAdjacentReportOutputEntity
        > = await this.tmsRestaurantResultBusinessAndProfitService.spGRPRestaurantResultBusinessAndProfitAdjacent(
            tmsRestaurantResultBusinessAndProfitDto.restaurant_id,
            tmsRestaurantResultBusinessAndProfitDto.restaurant_brand_id,
            tmsRestaurantResultBusinessAndProfitDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new RestaurantResultBusinessAndProfitAdjacentReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);

    }

    @Get("same-period")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantResultBusinessAndProfitSamePeriod (
        @Query() tmsRestaurantResultBusinessAndProfitDto: TmsRestaurantResultBusinessAndProfitDto,
        @Res() res: Response
    ): Promise<any>{
        let response: ResponseData = new ResponseData(); 

        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantResultBusinessAndProfitDto.report_type
          ).getTimeType();
          
        let data: StoreProcedureOutputResultInterface<
        TmsRestaurantResultBusinessAndProfitSamePeriodReportEntity, TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputEntity
        > = await this.tmsRestaurantResultBusinessAndProfitService.spGRPRestaurantResultBusinessAndProfitSamePeriod(
            tmsRestaurantResultBusinessAndProfitDto.restaurant_id,
            tmsRestaurantResultBusinessAndProfitDto.restaurant_brand_id,
            tmsRestaurantResultBusinessAndProfitDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantResultBusinessAndProfitSamePeriodReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);

    }

}
