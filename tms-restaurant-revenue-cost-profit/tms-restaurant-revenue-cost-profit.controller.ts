import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { TmsRestaurantRevenueCostProfitEstimateDto } from './tms-restaurant-revenue-cost-profit.dto/tms-restaurant-revenue-cost-profit-estimate.dto';
import { TmsRestaurantRevenueCostProfitRealityDto } from './tms-restaurant-revenue-cost-profit.dto/tms-restaurant-revenue-cost-profit-reality.dto';
import { TmsRestaurantRevenueCostProfitEstimateEntity } from './tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-estimate.entity';
import { TmsRestaurantRevenueCostProfitRealityEntity } from './tms-restaurant-revenue-cost-profit.entity/tms-restaurant-revenue-cost-profit-reality.entity';
import { TmsRestaurantRevenueCostProfitEstimateOutputEntity } from './tms-restaurant-revenue-cost-profit.output.entity/tms-restaurant-revenue-cost-profit-estimate.output.entity';
import { TmsRestaurantRevenueCostProfitRealityOutputEntity } from './tms-restaurant-revenue-cost-profit.output.entity/tms-restaurant-revenue-cost-profit-reality.output.entity';
import { TmsRestaurantRevenueCostProfitEstimateDataResponse } from './tms-restaurant-revenue-cost-profit.output.response/tms-restaurant-revenue-cost-profit-estimate.data.response';
import { TmsRestaurantRevenueCostProfitRealityDataResponse } from './tms-restaurant-revenue-cost-profit.output.response/tms-restaurant-revenue-cost-profit-reality.data.response';
import { TmsRestaurantRevenueCostProfitService } from './tms-restaurant-revenue-cost-profit.service';

@Controller('api/tms-restaurant-revenue-cost-profit')
export class TmsRestaurantRevenueCostProfitController {
    constructor (
        private tmsRestaurantRevenueCostProfitService: TmsRestaurantRevenueCostProfitService
    ) {}

    @Get("/estimate")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGTmsCustomerReport (
        @Query() tmsRestaurantRevenueCostProfitEstimateDto : TmsRestaurantRevenueCostProfitEstimateDto,
        @Res() res: Response
    ): Promise<any>{
        let response: ResponseData = new ResponseData(); 
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueCostProfitEstimateDto.report_type
          ).getTimeType();
          

        let data : StoreProcedureOutputResultInterface<
        TmsRestaurantRevenueCostProfitEstimateEntity,TmsRestaurantRevenueCostProfitEstimateOutputEntity> = await this.tmsRestaurantRevenueCostProfitService.spGRPRestaurantRevenueCostProfitEstimate(
            tmsRestaurantRevenueCostProfitEstimateDto.restaurant_id,
            tmsRestaurantRevenueCostProfitEstimateDto.restaurant_brand_id,
            tmsRestaurantRevenueCostProfitEstimateDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantRevenueCostProfitEstimateDataResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);
    }

    @Get("/reality")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantRevenueCostProfitReality(
        @Query() tmsRestaurantRevenueCostProfitRealityDto: TmsRestaurantRevenueCostProfitRealityDto,
        @Res() res: Response
    ): Promise<any>{
        let response: ResponseData = new ResponseData();

        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueCostProfitRealityDto.report_type
          ).getTimeType();

        let data: StoreProcedureOutputResultInterface<TmsRestaurantRevenueCostProfitRealityEntity, 
        TmsRestaurantRevenueCostProfitRealityOutputEntity> = await this.tmsRestaurantRevenueCostProfitService.spGRPRestaurantRevenueCostProfitReality(
            tmsRestaurantRevenueCostProfitRealityDto.restaurant_id,
            tmsRestaurantRevenueCostProfitRealityDto.restaurant_brand_id,
            tmsRestaurantRevenueCostProfitRealityDto.branch_id,
            time.from_date,
            time.to_date,
            time.group_type
        );

        response.setData(new TmsRestaurantRevenueCostProfitRealityDataResponse(data.list, data.output))

        return res.status(HttpStatus.OK).send(response);
    }
}
