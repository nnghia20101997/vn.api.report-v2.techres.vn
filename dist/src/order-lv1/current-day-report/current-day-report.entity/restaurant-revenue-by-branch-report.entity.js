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
exports.RestaurantRevenueByBranchReportEntity = void 0;
const typeorm_1 = require("typeorm");
let RestaurantRevenueByBranchReportEntity = class RestaurantRevenueByBranchReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], RestaurantRevenueByBranchReportEntity.prototype, "branch_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], RestaurantRevenueByBranchReportEntity.prototype, "branch_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueByBranchReportEntity.prototype, "restaurant_brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], RestaurantRevenueByBranchReportEntity.prototype, "restaurant_brand_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueByBranchReportEntity.prototype, "total_revenue_paid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueByBranchReportEntity.prototype, "total_revenue_in_service", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueByBranchReportEntity.prototype, "total_revenue_estimated", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantRevenueByBranchReportEntity.prototype, "branch_status", void 0);
RestaurantRevenueByBranchReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], RestaurantRevenueByBranchReportEntity);
exports.RestaurantRevenueByBranchReportEntity = RestaurantRevenueByBranchReportEntity;
//# sourceMappingURL=restaurant-revenue-by-branch-report.entity.js.map