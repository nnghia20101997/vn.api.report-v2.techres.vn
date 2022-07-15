import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantTotalRevenueFoodByInventoryReportDto } from './tms-restaurant-total-revenue-food-by-inventory.dto/tms-restaurant-total-revenue-food-by-inventory.dto';
import { TmsRestaurantTotalRevenueFoodByInventoryReportEntity } from './tms-restaurant-total-revenue-food-by-inventory.entity/tms-restaurant-total-revenue-food-by-inventory.entity';
import { TmsRestaurantTotalRevenueFoodByInventoryReportResponse } from './tms-restaurant-total-revenue-food-by-inventory.response/tms-restaurant-total-revenue-food-by-inventory.response';
import { TmsRestaurantTotalRevenueFoodByInventoryService } from './tms-restaurant-total-revenue-food-by-inventory.service';

@Controller('api/tms-restaurant-total-revenue-food-by-inventory')
export class TmsRestaurantTotalRevenueFoodByInventoryController {
    constructor(
        private tmsRestaurantTotalRevenueFoodByInventoryService: TmsRestaurantTotalRevenueFoodByInventoryService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query()tmsRestaurantTotalRevenueFoodByInventoryReportDto: TmsRestaurantTotalRevenueFoodByInventoryReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantTotalRevenueFoodByInventoryReportDto.report_type
        ).getTimeType();
        
        let data: TmsRestaurantTotalRevenueFoodByInventoryReportEntity[] = await this.tmsRestaurantTotalRevenueFoodByInventoryService.spGRPRestaurantTotalRevenueFoodByInventory(
            tmsRestaurantTotalRevenueFoodByInventoryReportDto.restaurant_id,
            tmsRestaurantTotalRevenueFoodByInventoryReportDto.restaurant_brand_id,
            tmsRestaurantTotalRevenueFoodByInventoryReportDto.branch_id,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantTotalRevenueFoodByInventoryReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
