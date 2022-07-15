import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantDiscountFromOrderReportDto } from './tms-restaurant-discount-from-order.dto/tms-restaurant-discount-from-order.dto';
import { TmsRestaurantDiscountFromOrderReportEntity } from './tms-restaurant-discount-from-order.entity/tms-restaurant-discount-from-order.entity';
import { TmsRestaurantDiscountFromOrderReporResponse } from './tms-restaurant-discount-from-order.response/tms-restaurant-discount-from-order.response';
import { TmsRestaurantDiscountFromOrderService } from './tms-restaurant-discount-from-order.service';

@Controller('api/tms-restaurant-discount-from-order')
export class TmsRestaurantDiscountFromOrderController {
    constructor(
        private tmsRestaurantDiscountFromOrderService: TmsRestaurantDiscountFromOrderService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantDiscountFromOrderReportDto: TmsRestaurantDiscountFromOrderReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantDiscountFromOrderReportDto.report_type
        ).getTimeType();

        let data: TmsRestaurantDiscountFromOrderReportEntity[] = await this.tmsRestaurantDiscountFromOrderService.spGRPRestaurantDiscountFromOrder(
            tmsRestaurantDiscountFromOrderReportDto.restaurant_id,
            tmsRestaurantDiscountFromOrderReportDto.restaurant_brand_id,
            tmsRestaurantDiscountFromOrderReportDto.branch_id,
            time.group_type,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantDiscountFromOrderReporResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
