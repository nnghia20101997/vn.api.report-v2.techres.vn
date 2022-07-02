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
exports.AdminTopTenProductBestSellerDetailDataModelEntity = void 0;
const typeorm_1 = require("typeorm");
let AdminTopTenProductBestSellerDetailDataModelEntity = class AdminTopTenProductBestSellerDetailDataModelEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AdminTopTenProductBestSellerDetailDataModelEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], AdminTopTenProductBestSellerDetailDataModelEntity.prototype, "product_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTopTenProductBestSellerDetailDataModelEntity.prototype, "total_product", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTopTenProductBestSellerDetailDataModelEntity.prototype, "total_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTopTenProductBestSellerDetailDataModelEntity.prototype, "total_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTopTenProductBestSellerDetailDataModelEntity.prototype, "average_quantity_on_one_order", void 0);
AdminTopTenProductBestSellerDetailDataModelEntity = __decorate([
    (0, typeorm_1.Entity)()
], AdminTopTenProductBestSellerDetailDataModelEntity);
exports.AdminTopTenProductBestSellerDetailDataModelEntity = AdminTopTenProductBestSellerDetailDataModelEntity;
//# sourceMappingURL=admin-top-ten-product-best-seller-detail-data-model.entity.js.map