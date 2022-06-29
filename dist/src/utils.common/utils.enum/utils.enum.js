"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPassword = exports.TypeSalerLog = exports.TypeUser = exports.ValueType = exports.Percent = void 0;
var Percent;
(function (Percent) {
    Percent[Percent["MIN"] = 0] = "MIN";
    Percent[Percent["MAX"] = 100] = "MAX";
})(Percent = exports.Percent || (exports.Percent = {}));
var ValueType;
(function (ValueType) {
    ValueType[ValueType["NUMBER"] = 0] = "NUMBER";
    ValueType[ValueType["STRING"] = 1] = "STRING";
})(ValueType = exports.ValueType || (exports.ValueType = {}));
var TypeUser;
(function (TypeUser) {
    TypeUser[TypeUser["ADMIN"] = 3] = "ADMIN";
    TypeUser[TypeUser["SALER"] = 5] = "SALER";
})(TypeUser = exports.TypeUser || (exports.TypeUser = {}));
var TypeSalerLog;
(function (TypeSalerLog) {
    TypeSalerLog[TypeSalerLog["TYPE_MAX"] = 4] = "TYPE_MAX";
    TypeSalerLog[TypeSalerLog["TYPE_MIN"] = -1] = "TYPE_MIN";
})(TypeSalerLog = exports.TypeSalerLog || (exports.TypeSalerLog = {}));
var ResetPassword;
(function (ResetPassword) {
    ResetPassword["NEW_PASS"] = "0000";
})(ResetPassword = exports.ResetPassword || (exports.ResetPassword = {}));
//# sourceMappingURL=utils.enum.js.map