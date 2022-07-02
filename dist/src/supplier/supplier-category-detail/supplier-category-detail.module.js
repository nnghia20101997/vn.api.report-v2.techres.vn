"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierCategoryDetailModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCategoryDetailModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_category_detail_controller_1 = require("./supplier-category-detail.controller");
const supplier_category_detail_data_model_entity_1 = require("./supplier-category-detail.entity/supplier-category-detail.data.model.entity");
const supplier_category_detail_service_1 = require("./supplier-category-detail.service");
let SupplierCategoryDetailModule = SupplierCategoryDetailModule_1 = class SupplierCategoryDetailModule {
};
SupplierCategoryDetailModule = SupplierCategoryDetailModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([supplier_category_detail_data_model_entity_1.SupplierCategoryDetailDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierCategoryDetailModule_1,
        ],
        controllers: [supplier_category_detail_controller_1.SupplierCategoryDetailController],
        providers: [supplier_category_detail_service_1.SupplierCategoryDetailService],
        exports: [supplier_category_detail_service_1.SupplierCategoryDetailService]
    })
], SupplierCategoryDetailModule);
exports.SupplierCategoryDetailModule = SupplierCategoryDetailModule;
//# sourceMappingURL=supplier-category-detail.module.js.map