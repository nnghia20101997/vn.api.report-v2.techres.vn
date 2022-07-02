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
exports.AdminAdvertisingRevenueDetailDataModelEntity = void 0;
const typeorm_1 = require("typeorm");
let AdminAdvertisingRevenueDetailDataModelEntity = class AdminAdvertisingRevenueDetailDataModelEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AdminAdvertisingRevenueDetailDataModelEntity.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], AdminAdvertisingRevenueDetailDataModelEntity.prototype, "report_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminAdvertisingRevenueDetailDataModelEntity.prototype, "media_length_by_second", void 0);
AdminAdvertisingRevenueDetailDataModelEntity = __decorate([
    (0, typeorm_1.Entity)()
], AdminAdvertisingRevenueDetailDataModelEntity);
exports.AdminAdvertisingRevenueDetailDataModelEntity = AdminAdvertisingRevenueDetailDataModelEntity;
//# sourceMappingURL=admin-advertising-revenue-detail.entity.js.map