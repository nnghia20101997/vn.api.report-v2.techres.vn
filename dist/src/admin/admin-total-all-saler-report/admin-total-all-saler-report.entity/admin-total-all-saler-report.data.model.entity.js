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
exports.AdminTotalAllSalerReportDataModelEntity = void 0;
const typeorm_1 = require("typeorm");
let AdminTotalAllSalerReportDataModelEntity = class AdminTotalAllSalerReportDataModelEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AdminTotalAllSalerReportDataModelEntity.prototype, "number_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTotalAllSalerReportDataModelEntity.prototype, "order_done", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTotalAllSalerReportDataModelEntity.prototype, "provisional_revenue", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTotalAllSalerReportDataModelEntity.prototype, "average_value_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTotalAllSalerReportDataModelEntity.prototype, "revenue_cancel", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTotalAllSalerReportDataModelEntity.prototype, "revenue_done", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AdminTotalAllSalerReportDataModelEntity.prototype, "rate_single_closing", void 0);
AdminTotalAllSalerReportDataModelEntity = __decorate([
    (0, typeorm_1.Entity)()
], AdminTotalAllSalerReportDataModelEntity);
exports.AdminTotalAllSalerReportDataModelEntity = AdminTotalAllSalerReportDataModelEntity;
//# sourceMappingURL=admin-total-all-saler-report.data.model.entity.js.map