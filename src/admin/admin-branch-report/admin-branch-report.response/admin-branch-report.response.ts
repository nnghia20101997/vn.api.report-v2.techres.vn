import { AdminBranchReporDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";


export class AdminBranchReportResponse {
  id: number;

  name: string;

  phone_number: string;

  address_full_text: string;

  constructor(adminBranchReporDataModelEntity?: AdminBranchReporDataModelEntity) {
    this.id = adminBranchReporDataModelEntity ? +adminBranchReporDataModelEntity.id : 0;
    this.name = adminBranchReporDataModelEntity ? adminBranchReporDataModelEntity.name : "";
    this.phone_number = adminBranchReporDataModelEntity
      ? adminBranchReporDataModelEntity.phone_number
      : "";
    this.address_full_text = adminBranchReporDataModelEntity
      ? adminBranchReporDataModelEntity.address_full_text
      : "";
  }

  public mapToList(data: AdminBranchReporDataModelEntity[]) {
    let response: AdminBranchReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminBranchReportResponse(e));
    });
    return response;
  }
}
