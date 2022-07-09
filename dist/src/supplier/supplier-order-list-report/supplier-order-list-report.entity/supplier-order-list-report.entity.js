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
exports.SupplierOrderListReportEntity = void 0;
const typeorm_1 = require("typeorm");
let SupplierOrderListReportEntity = class SupplierOrderListReportEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "supplier_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "is_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "restaurant_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierOrderListReportEntity.prototype, "restaurant_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "branch_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierOrderListReportEntity.prototype, "branch_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "total_material", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "total_vat_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "total_discount_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "total_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierOrderListReportEntity.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierOrderListReportEntity.prototype, "delivery_time", void 0);
SupplierOrderListReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], SupplierOrderListReportEntity);
exports.SupplierOrderListReportEntity = SupplierOrderListReportEntity;
//# sourceMappingURL=supplier-order-list-report.entity.js.map