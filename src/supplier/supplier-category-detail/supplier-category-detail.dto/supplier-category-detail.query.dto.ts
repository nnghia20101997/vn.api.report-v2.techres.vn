export class SupplierCategoryDetailQueryDTO {
  readonly supplier_id: number = -1;

  readonly material_category_id: number = -1;

  readonly from_date: string;

  readonly to_date: string;

  readonly page: number = 1;

  readonly limit: number = 100;
}
