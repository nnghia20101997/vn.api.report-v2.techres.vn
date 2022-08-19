import { SupplierWarehouseMaterialOutputReportEntity } from "../supplier-warehouse-material-report.entity/supplier-warehouse-material-output-report.entity";
import { SupplierWarehouseMaterialReportEntity } from "../supplier-warehouse-material-report.entity/supplier-warehouse-material-report.entity";
import { SupplierWarehouseMaterialReportResponse } from "./supplier-warehouse-material-report.response";


export class SupplierWarehouseMaterialOutputReportResponse {

    total_record: number;

    export_quantity: number;

    import_quantity: number;

    return_quantity: number;

    remaining_quantity: number;

    total_import_amount: number;

    total_export_amount: number;

    total_return_amount: number;

    total_remaining_amount: number;

    data: Array<SupplierWarehouseMaterialReportResponse>;

    constructor(output?: SupplierWarehouseMaterialOutputReportEntity, list?: Array<SupplierWarehouseMaterialReportEntity>) {
        this.total_record = output ? + output.total_record : 0;
        this.export_quantity = output ? + output.export_quantity : 0;
        this.import_quantity = output ? + output.import_quantity : 0;
        this.return_quantity = output ? + output.return_quantity : 0;
        this.remaining_quantity = output ? + output.remaining_quantity : 0;
        this.total_import_amount = output ? + output.total_import_amount : 0;
        this.total_export_amount = output ? + output.total_export_amount : 0;
        this.total_return_amount = output ? + output.total_return_amount : 0;
        this.total_remaining_amount = output ? + output.total_remaining_amount : 0;
        this.data = new SupplierWarehouseMaterialReportResponse().mapToList(list);
    }

}
