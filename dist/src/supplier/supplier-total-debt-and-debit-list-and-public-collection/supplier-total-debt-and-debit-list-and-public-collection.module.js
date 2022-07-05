"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierTotalDebtAndDebitListAndPublicCollectionModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierTotalDebtAndDebitListAndPublicCollectionModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_total_debt_and_debit_list_and_public_collection_controller_1 = require("./supplier-total-debt-and-debit-list-and-public-collection.controller");
const supplier_total_debt_and_debit_list_and_public_collection_data_model_entity_1 = require("./supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity");
const supplier_total_debt_and_debit_list_and_public_collection_service_1 = require("./supplier-total-debt-and-debit-list-and-public-collection.service");
let SupplierTotalDebtAndDebitListAndPublicCollectionModule = SupplierTotalDebtAndDebitListAndPublicCollectionModule_1 = class SupplierTotalDebtAndDebitListAndPublicCollectionModule {
};
SupplierTotalDebtAndDebitListAndPublicCollectionModule = SupplierTotalDebtAndDebitListAndPublicCollectionModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                supplier_total_debt_and_debit_list_and_public_collection_data_model_entity_1.SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity,
            ]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierTotalDebtAndDebitListAndPublicCollectionModule_1,
        ],
        controllers: [supplier_total_debt_and_debit_list_and_public_collection_controller_1.SupplierTotalDebtAndDebitListAndPublicCollectionController],
        providers: [supplier_total_debt_and_debit_list_and_public_collection_service_1.SupplierTotalDebtAndDebitListAndPublicCollectionService],
        exports: [supplier_total_debt_and_debit_list_and_public_collection_service_1.SupplierTotalDebtAndDebitListAndPublicCollectionService],
    })
], SupplierTotalDebtAndDebitListAndPublicCollectionModule);
exports.SupplierTotalDebtAndDebitListAndPublicCollectionModule = SupplierTotalDebtAndDebitListAndPublicCollectionModule;
//# sourceMappingURL=supplier-total-debt-and-debit-list-and-public-collection.module.js.map