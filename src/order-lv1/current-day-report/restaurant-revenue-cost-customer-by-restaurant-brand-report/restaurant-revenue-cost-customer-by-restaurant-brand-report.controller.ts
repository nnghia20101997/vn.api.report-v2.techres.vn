import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.dto/restaurant-revenue-cost-customer-by-restaurant-brand-report.query.dto';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportResponse } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.response/restaurant-revenue-cost-customer-by-restaurant-brand-report.response';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportService } from './restaurant-revenue-cost-customer-by-restaurant-brand-report.service';
import { Response } from 'express';

@Controller('api/current-day-report')
export class RestaurantRevenueCostCustomerByRestaurantBrandReportController {
    constructor(
        private restaurantRevenueCostCustomerByRestaurantBrandReportService: RestaurantRevenueCostCustomerByRestaurantBrandReportService,
    ) { }

  
    @Get("/restaurant-revenue-cost-customer-by-restaurant-brand")
    async GetRpRestaurantRevenueCostCustomerByRestaurantBrand(@Query() restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO : RestaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueCostCustomerByRestaurantBrandReportEntity= await this.restaurantRevenueCostCustomerByRestaurantBrandReportService.spGetRpRestaurantRevenueCostCustomerByRestaurantBrand(
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.restaurant_id ,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.restaurant_brand_id,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.branch_id,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.from_date_string,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantRevenueCostCustomerByRestaurantBrandReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }

}
