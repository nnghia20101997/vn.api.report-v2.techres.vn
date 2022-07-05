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
exports.RestaurantInformationInAlolineReportEntity = void 0;
const typeorm_1 = require("typeorm");
let RestaurantInformationInAlolineReportEntity = class RestaurantInformationInAlolineReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], RestaurantInformationInAlolineReportEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantInformationInAlolineReportEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantInformationInAlolineReportEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantInformationInAlolineReportEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantInformationInAlolineReportEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantInformationInAlolineReportEntity.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "average_rate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "rate_count", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "customer_members", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "total_accumulate_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "used_accumulate_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "total_promotion_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "used_promotion_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "total_alo_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantInformationInAlolineReportEntity.prototype, "total_amount", void 0);
RestaurantInformationInAlolineReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], RestaurantInformationInAlolineReportEntity);
exports.RestaurantInformationInAlolineReportEntity = RestaurantInformationInAlolineReportEntity;
//# sourceMappingURL=restaurant-information-in-aloline-report.entity.js.map