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
exports.SupplierMaterialPriceChangeHistoriesReportEntity = void 0;
const typeorm_1 = require("typeorm");
let SupplierMaterialPriceChangeHistoriesReportEntity = class SupplierMaterialPriceChangeHistoriesReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "supplier_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "supplier_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "supplier_material_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "supplier_material_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "restaurant_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "restaurant_brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "branch_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "total_new_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "total_old_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "total_price_difference", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SupplierMaterialPriceChangeHistoriesReportEntity.prototype, "created_at", void 0);
SupplierMaterialPriceChangeHistoriesReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], SupplierMaterialPriceChangeHistoriesReportEntity);
exports.SupplierMaterialPriceChangeHistoriesReportEntity = SupplierMaterialPriceChangeHistoriesReportEntity;
//# sourceMappingURL=supplier-material-price-change-histories-report.entity.js.map