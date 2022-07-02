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
exports.SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity = void 0;
const typeorm_1 = require("typeorm");
let SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity = class SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.prototype, "restaurant_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.prototype, "debt_amount", void 0);
SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity = __decorate([
    (0, typeorm_1.Entity)()
], SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity);
exports.SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity = SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity;
//# sourceMappingURL=supplier-total-debt-and-debit-list-and-public-collection.data.model.entity.js.map