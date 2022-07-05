"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseSessionTotalImportExportAmountReportEntity = void 0;
const typeorm_1 = require("typeorm");
let WarehouseSessionTotalImportExportAmountReportEntity = class WarehouseSessionTotalImportExportAmountReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], WarehouseSessionTotalImportExportAmountReportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WarehouseSessionTotalImportExportAmountReportEntity.prototype, "restaurant_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WarehouseSessionTotalImportExportAmountReportEntity.prototype, "restaurant_brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WarehouseSessionTotalImportExportAmountReportEntity.prototype, "branch_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WarehouseSessionTotalImportExportAmountReportEntity.prototype, "report_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WarehouseSessionTotalImportExportAmountReportEntity.prototype, "import_quantity_amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WarehouseSessionTotalImportExportAmountReportEntity.prototype, "export_quantity_amount", void 0);
WarehouseSessionTotalImportExportAmountReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], WarehouseSessionTotalImportExportAmountReportEntity);
exports.WarehouseSessionTotalImportExportAmountReportEntity = WarehouseSessionTotalImportExportAmountReportEntity;
//# sourceMappingURL=warehouse-session-total-import-export-amount-report.entity.js.map