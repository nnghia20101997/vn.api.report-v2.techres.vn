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
exports.SupplierWarehouseMaterialReportEntity = void 0;
const typeorm_1 = require("typeorm");
let SupplierWarehouseMaterialReportEntity = class SupplierWarehouseMaterialReportEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "supplier_material_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "supplier_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "material_category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierWarehouseMaterialReportEntity.prototype, "material_category_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierWarehouseMaterialReportEntity.prototype, "supplier_material_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierWarehouseMaterialReportEntity.prototype, "supplier_material_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierWarehouseMaterialReportEntity.prototype, "unit_full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "total_import", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "total_export", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "total_return", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "quantity_export", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "quantity_import", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "quantity_return", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "quantity_remaining", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseMaterialReportEntity.prototype, "total_remaining", void 0);
SupplierWarehouseMaterialReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], SupplierWarehouseMaterialReportEntity);
exports.SupplierWarehouseMaterialReportEntity = SupplierWarehouseMaterialReportEntity;
//# sourceMappingURL=supplier-warehouse-material-report.entity.js.map