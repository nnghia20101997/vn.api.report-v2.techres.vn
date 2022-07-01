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
import { SupplierOrderTotalOrderByTimeQueryDTO } from "./supplier-order-total-order-by-time.dto/supplier-order-total-order-by-time.query.dto";
import { SupplierOrderTotalOrderByTimeDataModelEntity } from "./supplier-order-total-order-by-time.entity/supplier-order-total-order-by-time.data.model.entity";
import { SupplierOrderTotalOrderByTimeResponse } from "./supplier-order-total-order-by-time.response/supplier-order-total-order-by-time.response";
import { SupplierOrderTotalOrderByTimeService } from "./supplier-order-total-order-by-time.service";

@Controller("/api/supplier-order-total-order-by-time")
export class SupplierOrderTotalOrderByTimeRController {
  constructor(
    private supplierOrderTotalOrderByTimeService: SupplierOrderTotalOrderByTimeService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminSalerDetailReport(
    @Query()
    supplierOrderTotalOrderByTimeQueryDTO: SupplierOrderTotalOrderByTimeQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: SupplierOrderTotalOrderByTimeDataModelEntity =
      await this.supplierOrderTotalOrderByTimeService.spGRpSupplierOrderTotalOrderByTime(
        supplierOrderTotalOrderByTimeQueryDTO.supplier_id,
        UtilsDate.formatDateInsertDatabase(
          supplierOrderTotalOrderByTimeQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
          supplierOrderTotalOrderByTimeQueryDTO.to_date
        )
      );
console.log(result);

    response.setData(new SupplierOrderTotalOrderByTimeResponse(result));
    return res.status(HttpStatus.OK).send(response);
  }
}
