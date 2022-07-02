"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierOrderTotalOrderByTimeModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierOrderTotalOrderByTimeModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_order_total_order_by_time_controller_1 = require("./supplier-order-total-order-by-time.controller");
const supplier_order_total_order_by_time_data_model_entity_1 = require("./supplier-order-total-order-by-time.entity/supplier-order-total-order-by-time.data.model.entity");
const supplier_order_total_order_by_time_service_1 = require("./supplier-order-total-order-by-time.service");
let SupplierOrderTotalOrderByTimeModule = SupplierOrderTotalOrderByTimeModule_1 = class SupplierOrderTotalOrderByTimeModule {
};
SupplierOrderTotalOrderByTimeModule = SupplierOrderTotalOrderByTimeModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([supplier_order_total_order_by_time_data_model_entity_1.SupplierOrderTotalOrderByTimeDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierOrderTotalOrderByTimeModule_1,
        ],
        controllers: [supplier_order_total_order_by_time_controller_1.SupplierOrderTotalOrderByTimeRController],
        providers: [supplier_order_total_order_by_time_service_1.SupplierOrderTotalOrderByTimeService],
        exports: [supplier_order_total_order_by_time_service_1.SupplierOrderTotalOrderByTimeService],
    })
], SupplierOrderTotalOrderByTimeModule);
exports.SupplierOrderTotalOrderByTimeModule = SupplierOrderTotalOrderByTimeModule;
//# sourceMappingURL=supplier-order-total-order-by-time.module.js.map