import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-result.interface.common';
import { TmsRestaurantBusinessGrowthReportDto } from './tms-restaurant-business-growth.dto/tms-restaurant-business-growth.dto';
import { TmsRestaurantBusinessGrowthReportEntity } from './tms-restaurant-business-growth.entity/tms-restaurant-business-growth.entity';
import { TmsRestaurantBusinessGrowthReportResponse } from './tms-restaurant-business-growth.response/tms-restaurant-business-growth.response';
import { TmsRestaurantBusinessGrowthService } from './tms-restaurant-business-growth.service';

@Controller('api/tms-restaurant-business-growth-report')
export class TmsRestaurantBusinessGrowthController {
    constructor(
        private tmsRestaurantBusinessGrowthService: TmsRestaurantBusinessGrowthService
    ) {}
    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantBusinessGrowth(
        @Query() tmsRestaurantBusinessGrowthReportDto: TmsRestaurantBusinessGrowthReportDto,
        @Res() res: Response
    ): Promise<any>{

        let response: ResponseData = new ResponseData();

        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantBusinessGrowthReportDto.report_type
          ).getTimeType();

        let data: TmsRestaurantBusinessGrowthReportEntity[] =  await this.tmsRestaurantBusinessGrowthService.spGRPRestaurantBusinessGrowth(
            tmsRestaurantBusinessGrowthReportDto.restaurant_id,
            tmsRestaurantBusinessGrowthReportDto.restautant_brand_id,
            tmsRestaurantBusinessGrowthReportDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantBusinessGrowthReportResponse().mapToList(data));

        return res.status(HttpStatus.OK).send(response);


    }
}
