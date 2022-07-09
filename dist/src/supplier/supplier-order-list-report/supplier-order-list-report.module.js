"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierOrderListReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierOrderListReportModule = void 0;
const common_1 = require("@nestjs/common");
const supplier_order_list_report_service_1 = require("./supplier-order-list-report.service");
const supplier_order_list_report_controller_1 = require("./supplier-order-list-report.controller");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_order_list_report_entity_1 = require("./supplier-order-list-report.entity/supplier-order-list-report.entity");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let SupplierOrderListReportModule = SupplierOrderListReportModule_1 = class SupplierOrderListReportModule {
};
SupplierOrderListReportModule = SupplierOrderListReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([supplier_order_list_report_entity_1.SupplierOrderListReportEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierOrderListReportModule_1,
        ],
        providers: [supplier_order_list_report_service_1.SupplierOrderListReportService],
        controllers: [supplier_order_list_report_controller_1.SupplierOrderListReportController]
    })
], SupplierOrderListReportModule);
exports.SupplierOrderListReportModule = SupplierOrderListReportModule;
//# sourceMappingURL=supplier-order-list-report.module.js.map