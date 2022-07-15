import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { StoreProcedureGetTimeDatabase } from 'src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { StoreProcedureOutputResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common';
import { TmsRestaurantRevenueByEmployeeReportDto } from './tms-restaurant-revenue-by-employee.dto/tms-restaurant-revenue-by-employee.dto';
import { TmsRestaurantRevenueByEmployeeReportEntity } from './tms-restaurant-revenue-by-employee.entity/tms-restaurant-revenue-by-employee.entity';
import { TmsRestaurantRevenueByEmployeeReportOutputEntity } from './tms-restaurant-revenue-by-employee.output.entity/tms-restaurant-revenue-by-employee.output.entity';
import { TmsRestaurantRevenueByEmployeeReportOutputResponse } from './tms-restaurant-revenue-by-employee.output.response/tms-restaurant-revenue-by-employee.output.response';
import { TmsRestaurantRevenueByEemployeeService } from './tms-restaurant-revenue-by-employee.service';

@Controller('api/tms-restaurant-revenue-by-eemployee')
export class TmsRestaurantRevenueByEemployeeController {
    constructor(
        private tmsRestaurantRevenueByEemployeeService: TmsRestaurantRevenueByEemployeeService
    ) {}

    @Get('')
    async spGRPRestaurantRevenueByEemployee(
        @Query() tmsRestaurantRevenueByEmployeeReportDto: TmsRestaurantRevenueByEmployeeReportDto,
        @Res() res: Response
    ): Promise<any> {

        let response: ResponseData = new ResponseData(); 

        let time = new StoreProcedureGetTimeDatabase(
            tmsRestaurantRevenueByEmployeeReportDto.report_type
          ).getTimeType();
          
        let data: StoreProcedureOutputResultInterface<
                TmsRestaurantRevenueByEmployeeReportEntity,TmsRestaurantRevenueByEmployeeReportOutputEntity
        > = await this.tmsRestaurantRevenueByEemployeeService.spGRPRestaurantRevenueByEemployee(
            tmsRestaurantRevenueByEmployeeReportDto.restaurant_id,
            tmsRestaurantRevenueByEmployeeReportDto.restaurant_brand_id,
            tmsRestaurantRevenueByEmployeeReportDto.branch_id,
            time.from_date,
            time.to_date,
        );

        response.setData(new TmsRestaurantRevenueByEmployeeReportOutputResponse(data.list, data.output));

        return res.status(HttpStatus.OK).send(response);
    }
}
