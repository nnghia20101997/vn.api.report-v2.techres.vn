"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BranchModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchModule = void 0;
const common_1 = require("@nestjs/common");
const branch_service_1 = require("./branch.service");
const branch_controller_1 = require("./branch.controller");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const branch_data_model_entity_1 = require("./branch.entity/branch.data.model.entity");
let BranchModule = BranchModule_1 = class BranchModule {
};
BranchModule = BranchModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([branch_data_model_entity_1.BranchDataModel]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            BranchModule_1
        ],
        providers: [branch_service_1.BranchService],
        controllers: [branch_controller_1.BranchController]
    })
], BranchModule);
exports.BranchModule = BranchModule;
//# sourceMappingURL=branch.module.js.map