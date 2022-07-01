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
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity } from "./supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity";
import { SupplierTotalDebtAndDebitListAndPublicCollectionQueryDTO } from "./supplier-total-debt-and-debit-list-and-public-collection.query.dto/supplier-total-debt-and-debit-list-and-public-collection.query.dto";
import { SupplierTotalDebtAndDebitListAndPublicCollectionResponse } from "./supplier-total-debt-and-debit-list-and-public-collection.response/supplier-total-debt-and-debit-list-and-public-collection.response";
import { SupplierTotalDebtAndDebitListAndPublicCollectionService } from "./supplier-total-debt-and-debit-list-and-public-collection.service";

@Controller("/api/supplier-total-debt-and-debit-list-and-public-collection")
export class SupplierTotalDebtAndDebitListAndPublicCollectionController {
  constructor(
    private SupplierTotalDebtAndDebitListAndPublicCollectionService: SupplierTotalDebtAndDebitListAndPublicCollectionService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpSupplierTotalDebtAndDebitListAndPublicCollection(
    @Query()
    supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO: SupplierTotalDebtAndDebitListAndPublicCollectionQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: StoreProcedureOutputResultInterface<
      SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity,
      any
    > = await this.SupplierTotalDebtAndDebitListAndPublicCollectionService.spGRpSupplierTotalDebtAndDebitListAndPublicCollection(
      supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.supplier_id,
      UtilsDate.formatDateInsertDatabase(
        supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.from_date
      ),
      UtilsDate.formatDateInsertDatabase(
        supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.to_date
      ),
      supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.key_search,
      supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.debt_type,
      supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.offset,
      supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.limit
    );
    response.setData(
      new SupplierTotalDebtAndDebitListAndPublicCollectionResponse(
        result.list,
        result.output
      )
    );

    return res.status(HttpStatus.OK).send(response);
  }
}
