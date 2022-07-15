import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantOrderExtraChargeReportDto } from './tms-restaurant-order-extra-charge.dto/tms-restaurant-order-extra-charge.dto';
import { TmsRestaurantOrderExtraChargeReportEntity } from './tms-restaurant-order-extra-charge.entity/tms-restaurant-order-extra-charge.entity';
import { TmsRestaurantOrderExtraChargeReportResponse } from './tms-restaurant-order-extra-charge.response/tms-restaurant-order-extra-charge.response';
import { TmsRestaurantOrderExtraChargeService } from './tms-restaurant-order-extra-charge.service';

@Controller('api/tms-restaurant-order-extra-charge')
export class TmsRestaurantOrderExtraChargeController {
    constructor(
        private tmsRestaurantOrderExtraChargeService: TmsRestaurantOrderExtraChargeService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantOrderExtraChargeReportDto: TmsRestaurantOrderExtraChargeReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantOrderExtraChargeReportDto.report_type
        ).getTimeType();

        let data: TmsRestaurantOrderExtraChargeReportEntity[] = await this.tmsRestaurantOrderExtraChargeService.spGRPRestaurantOrderExtraCharge(
            tmsRestaurantOrderExtraChargeReportDto.restaurant_id,
            tmsRestaurantOrderExtraChargeReportDto.restaurant_brand_id,
            tmsRestaurantOrderExtraChargeReportDto.branch_id,
            time.group_type,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantOrderExtraChargeReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
