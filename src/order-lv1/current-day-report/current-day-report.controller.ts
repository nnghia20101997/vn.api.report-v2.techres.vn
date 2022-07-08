import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantRevenueByBranchReportQueryDTO } from './current-day-report.dto/restaurant-revenue-by-branch-report.query.dto';
import { RestaurantRevenueByBranchReportEntity } from './current-day-report.entity/restaurant-revenue-by-branch-report.entity';
import { RestaurantRevenueByBranchReportResponse } from './current-day-report.response/restaurant-revenue-by-branch-report.response';
import { CurrentDayReportService } from './current-day-report.service';
import { Response } from 'express';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportResponse } from './current-day-report.response/restaurant-revenue-cost-customer-by-restaurant-brand-report.response';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO } from './current-day-report.dto/restaurant-revenue-cost-customer-by-restaurant-brand-report.query.dto';
import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity';
import { RestaurantRevenueDetailByRestaurantBrandReportQueryDTO } from './current-day-report.dto/restaurant-revenue-detail-by-restaurant-b.query.dto';
import { RestaurantRevenueDetailByRestaurantBrandReportResponse } from './current-day-report.response/restaurant-revenue-detail-by-restaurant-brand-report.response';

@Controller('api/current-day-report')
export class CurrentDayReportController {
    constructor(
        private currentDayReportService: CurrentDayReportService
    ) { }
    

    @Get("/restaurant-revenue-by-branch")
    async getRpRestaurantRevenueByBranch(@Query() restaurantRevenueByBranchReportQueryDTO : RestaurantRevenueByBranchReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueByBranchReportEntity[]= await this.currentDayReportService.spGetRpRestaurantRevenueByBranch(
            restaurantRevenueByBranchReportQueryDTO.restaurant_id ,
            restaurantRevenueByBranchReportQueryDTO.restaurant_brand_id,
            restaurantRevenueByBranchReportQueryDTO.branch_id,
            restaurantRevenueByBranchReportQueryDTO.from_date_string,
            restaurantRevenueByBranchReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantRevenueByBranchReportResponse().mapToList(result));
            return res.status(HttpStatus.OK).send(response);
    }

    
    @Get("/restaurant-revenue-cost-customer-by-restaurant-brand")
    async GetRpRestaurantRevenueCostCustomerByRestaurantBrand(@Query() restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO : RestaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueCostCustomerByRestaurantBrandReportEntity= await this.currentDayReportService.spGetRpRestaurantRevenueCostCustomerByRestaurantBrand(
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.restaurant_id ,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.restaurant_brand_id,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.branch_id,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.from_date_string,
            restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantRevenueCostCustomerByRestaurantBrandReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }

    @Get("/restaurant-revenue-detail-by-restaurant-brand")
    async getRpRestaurantRevenueDetailByRestaurantBrand(@Query() restaurantRevenueDetailByRestaurantBrandReportQueryDTO : RestaurantRevenueDetailByRestaurantBrandReportQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let result : RestaurantRevenueDetailByRestaurantBrandReportEntity= await this.currentDayReportService.spGetRpRestaurantRevenueDetailByRestaurantBrand(
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.restaurant_id ,
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.restaurant_brand_id,
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.from_date_string,
            restaurantRevenueDetailByRestaurantBrandReportQueryDTO.to_date_string
        );
            response.setData(new RestaurantRevenueDetailByRestaurantBrandReportResponse(result));
            return res.status(HttpStatus.OK).send(response);
    }
}
