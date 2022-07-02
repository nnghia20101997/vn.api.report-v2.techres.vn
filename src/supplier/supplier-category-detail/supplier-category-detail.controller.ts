import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { SupplierCategoryDetailQueryDTO } from "./supplier-category-detail.dto/supplier-category-detail.query.dto";
import { SupplierCategoryDetailDataModelEntity } from "./supplier-category-detail.entity/supplier-category-detail.data.model.entity";
import { SupplierCategoryDetailOutputResponse } from "./supplier-category-detail.response/supplier-category-detail.output.response";
import { SupplierCategoryDetailService } from "./supplier-category-detail.service";

@Controller("/api/supplier-category-detail")
export class SupplierCategoryDetailController {
  constructor(private supplierCategoryDetailService: SupplierCategoryDetailService) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpSupplierCategoryDetail(
    @Query() supplierCategoryDetailQueryDTO: SupplierCategoryDetailQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: StoreProcedureOutputResultInterface<
    SupplierCategoryDetailDataModelEntity,
      any
    > = await this.supplierCategoryDetailService.spGRpSupplierCategoryDetail(
        supplierCategoryDetailQueryDTO.supplierI_id,
        supplierCategoryDetailQueryDTO.material_categorie_id,
        UtilsDate.formatDateInsertDatabase(supplierCategoryDetailQueryDTO.from_date),
        UtilsDate.formatDateInsertDatabase(supplierCategoryDetailQueryDTO.to_date),
        supplierCategoryDetailQueryDTO.limit,
        supplierCategoryDetailQueryDTO.offset,
    );


    // response.setData(new AdminBranchReportResponse().mapToList(result.list));
    response.setData(new SupplierCategoryDetailOutputResponse(result.list,result.output));
    
    return res.status(HttpStatus.OK).send(response);
  }
}