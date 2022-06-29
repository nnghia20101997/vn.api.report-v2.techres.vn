import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminGravityProductBestSellerQueryDTO } from "./admin-gravity-product-best-seller.dto/admin-gravity-product-best-seller.query.dto";
import { AdminGravityProductBestSellerDataModelEntity } from "./admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";
import { AdminGravityProductBestSellerResponse } from "./admin-gravity-product-best-seller.response/admin-gravity-product-best-seller.response";
import { AdminGravityProductBestSellerService } from "./admin-gravity-product-best-seller.service";

@Controller("/api/admin-gravity-product-best-seller")
export class AdminGravityProductBestSellerController{
    constructor(
        private adminGravityProductBestSellerService: AdminGravityProductBestSellerService
    ) {}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpAdminAdvertisingRevenue(
        @Query() adminGravityProductBestSellerQueryDTO: AdminGravityProductBestSellerQueryDTO,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();

        let result: AdminGravityProductBestSellerDataModelEntity[] =
            await this.adminGravityProductBestSellerService.spGRpAdminGravityProductBestSeller(
                UtilsDate.formatDateInsertDatabase(adminGravityProductBestSellerQueryDTO.from_date),
                UtilsDate.formatDateInsertDatabase(adminGravityProductBestSellerQueryDTO.to_date)
            );
        response.setData(
            new AdminGravityProductBestSellerResponse().mapToList(result)
        );
        return res.status(HttpStatus.OK).send(response);
    }
}