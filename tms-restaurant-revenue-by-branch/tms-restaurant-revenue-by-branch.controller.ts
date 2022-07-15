import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TmsRestaurantRevenueByBrandReportDto } from './tms-restaurant-revenue-by-branch.dto/tms-restaurant-revenue-by-branch.dto';
import { TmsRestaurantRevenueByBrandReportEntity } from './tms-restaurant-revenue-by-branch.entity/tms-restaurant-revenue-by-branch.entity';
import { TmsRestaurantRevenueByBrandReportResponse } from './tms-restaurant-revenue-by-branch.response/tms-restaurant-revenue-by-branch.response';
import { TmsRestaurantRevenueByBranchService } from './tms-restaurant-revenue-by-branch.service';

@Controller('api/tms-restaurant-revenue-by-branch')
export class TmsRestaurantRevenueByBranchController {
    constructor(
        private tmsRestaurantRevenueByBranchService: TmsRestaurantRevenueByBranchService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRPRestaurantDebt(
        @Query() tmsRestaurantRevenueByBrandReportDto: TmsRestaurantRevenueByBrandReportDto,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();
        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueByBrandReportDto.report_type
        ).getTimeType();
        
        let data: TmsRestaurantRevenueByBrandReportEntity[] = await this.tmsRestaurantRevenueByBranchService.spGRPRestaurantRevenueByBranch(
            tmsRestaurantRevenueByBrandReportDto.restaurant_id,
            tmsRestaurantRevenueByBrandReportDto.restaurant_brand_id,
            tmsRestaurantRevenueByBrandReportDto.branch_id,
            time.from_date,
            time.to_date
        );

        response.setData(new TmsRestaurantRevenueByBrandReportResponse().mapToList(data))

        return res.status(HttpStatus.OK).send(response);

    }
}
