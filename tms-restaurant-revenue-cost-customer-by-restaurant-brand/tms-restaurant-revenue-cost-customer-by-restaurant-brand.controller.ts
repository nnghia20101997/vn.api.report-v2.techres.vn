import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandReportDto } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.dto/tms-restaurant-revenue-cost-customer-by-restaurant-brand.dto';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity/tms-restaurant-revenue-cost-customer-by-restaurant-brand.entity';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandReportResponse } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.response/tms-restaurant-revenue-cost-customer-by-restaurant-brand.response';
import { TmsRestaurantRevenueCostCustomerByRestaurantBrandService } from './tms-restaurant-revenue-cost-customer-by-restaurant-brand.service';

@Controller('api/tms-restaurant-revenue-cost-customer-by-restaurant-brand')
export class TmsRestaurantRevenueCostCustomerByRestaurantBrandController {
    constructor(
        private tmsRestaurantRevenueCostCustomerByRestaurantBrandService: TmsRestaurantRevenueCostCustomerByRestaurantBrandService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantRevenueCostCustomerByRestaurantBrandReportDto: TmsRestaurantRevenueCostCustomerByRestaurantBrandReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueCostCustomerByRestaurantBrandReportDto.report_type
        ).getTimeType();
        
        let data: TmsRestaurantRevenueCostCustomerByRestaurantBrandReportEntity[] = await this.tmsRestaurantRevenueCostCustomerByRestaurantBrandService.spGRPRestaurantRevenueCostCustomerByRestaurantBrand(
            tmsRestaurantRevenueCostCustomerByRestaurantBrandReportDto.restaurant_id,
            tmsRestaurantRevenueCostCustomerByRestaurantBrandReportDto.restaurant_brand_id,
            tmsRestaurantRevenueCostCustomerByRestaurantBrandReportDto.branch_id,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantRevenueCostCustomerByRestaurantBrandReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
