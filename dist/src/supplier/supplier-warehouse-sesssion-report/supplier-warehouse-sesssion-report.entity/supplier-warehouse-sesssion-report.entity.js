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
exports.SupplierWarehouseSesssionReportEntity = void 0;
const typeorm_1 = require("typeorm");
let SupplierWarehouseSesssionReportEntity = class SupplierWarehouseSesssionReportEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_inventory_first", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_import", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_export", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_cancel", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_inventory_now", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_inventory_first_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_import_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_export_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_cancel_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierWarehouseSesssionReportEntity.prototype, "total_inventory_now_amount", void 0);
SupplierWarehouseSesssionReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], SupplierWarehouseSesssionReportEntity);
exports.SupplierWarehouseSesssionReportEntity = SupplierWarehouseSesssionReportEntity;
//# sourceMappingURL=supplier-warehouse-sesssion-report.entity.js.map