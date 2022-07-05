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
exports.AuthLoginDTO = void 0;
const utils_decorator_common_1 = require("../../utils.common/utils.decorator.common/utils.decorator.common");
class AuthLoginDTO {
}
__decorate([
    (0, utils_decorator_common_1.IsNotEmptyString)(),
    __metadata("design:type", String)
], AuthLoginDTO.prototype, "username", void 0);
__decorate([
    (0, utils_decorator_common_1.IsNotEmptyString)(),
    __metadata("design:type", String)
], AuthLoginDTO.prototype, "password", void 0);
exports.AuthLoginDTO = AuthLoginDTO;
//# sourceMappingURL=auth.login.dto.js.map