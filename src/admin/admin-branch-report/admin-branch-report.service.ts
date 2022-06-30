import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResultOutput } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { AdminBranchReporDataModelEntity } from "./admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportOutputEntity } from "./admin-branch-report.entity/admin-branch-report.output.entity";

@Injectable()
export class AdminBranchReportService {
  constructor(
    @InjectRepository(AdminBranchReporDataModelEntity)
    private adminBranchReporDataModelEntity: Repository<AdminBranchReporDataModelEntity>
  ) {}

  /**
   *
   * @param status
   * @returns
   */

  async spGRpAdminBranchReport(
    status: number
  ): Promise<
    StoreProcedureOutputResultInterface<AdminBranchReporDataModelEntity, object>
  > {
    let result = await this.adminBranchReporDataModelEntity.query(
      "CALL sp_g_rp_admin_branch_report(?,@total_branch,@total_operating_branches,@branch_office_is_closed,@status,@message); SELECT @total_branch AS total_branch, @total_operating_branches AS total_operating_branches, @branch_office_is_closed AS branch_office_is_closed, @status AS status_code , @message AS message_error",
      [status]
    );
    ExceptionStoreProcedure.validate(result);

    let data: StoreProcedureOutputResultInterface<
      AdminBranchReporDataModelEntity,
      AdminBranchReportOutputEntity
    > = new StoreProcedureResultOutput<AdminBranchReporDataModelEntity>().getResultOutputList(
      result
    );

    return data;
  }
}
