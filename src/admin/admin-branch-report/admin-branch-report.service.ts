import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminBranchReporDataModelEntity } from "./admin-branch-report.entity/admin-branch-report.entity";

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
  ): Promise<AdminBranchReporDataModelEntity[]> {
    let result = await this.adminBranchReporDataModelEntity.query(
      "CALL sp_g_rp_admin_branch_report(?,@total_branch,@total_operating_branches,@branch_office_is_closed,@status,@message); SELECT @total_branch AS total_branch, @total_operating_branches AS total_operating_branches, @branch_office_is_closed AS branch_office_is_closed, @status AS status , @message AS message",
      [status]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminBranchReporDataModelEntity[] =
      new StoreProcedureResult<AdminBranchReporDataModelEntity>().getResultList(result);

    return data;
  }
}
