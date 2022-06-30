import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminTopTenProductBestSellerDetailQueryDTO } from "./admin-top-ten-product-best-seller-detail.dto/admin-top-ten-product-best-seller-detail.query.dto";
import { AdminTopTenProductBestSellerDetailDataModelEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";
import { AdminTopTenProductBestSellerDetailResponse } from "./admin-top-ten-product-best-seller-detail.response/admin-top-ten-product-best-seller-detail-response";
import { AdminTopTenProductBestSellerDetailService } from "./admin-top-ten-product-best-seller-detail.service";

@Controller("/api/admin-top-ten-product-best-seller-detail")
export class AdminTopTenProductBestSellerDetailController {
  constructor(
    private adminTopTenProductBestSellerDetailService: AdminTopTenProductBestSellerDetailService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query()
    adminTopTenProductBestSellerDetailQueryDTO: AdminTopTenProductBestSellerDetailQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: AdminTopTenProductBestSellerDetailDataModelEntity[] =
      await this.adminTopTenProductBestSellerDetailService.spGRpAdminTopTenProductBestSellerDetail(
        UtilsDate.formatDateInsertDatabase(
          adminTopTenProductBestSellerDetailQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
          adminTopTenProductBestSellerDetailQueryDTO.to_date
        ),
        adminTopTenProductBestSellerDetailQueryDTO._offset,
        adminTopTenProductBestSellerDetailQueryDTO._limit
      );
    response.setData(
      new AdminTopTenProductBestSellerDetailResponse().mapToList(result)
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
