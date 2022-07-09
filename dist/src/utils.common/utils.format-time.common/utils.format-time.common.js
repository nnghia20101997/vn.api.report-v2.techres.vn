"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsDate = void 0;
const moment = require("moment");
class UtilsDate {
    constructor() { }
    static formatDateTimeVNToString(date) {
        return moment(date).format('DD/MM/YYYY h:mm');
    }
    static formatDateVNToString(date) {
        return moment(date).format('DD/MM/YYYY');
    }
    static formatDateInsertDatabase(date) {
        if (date == null || date == "") {
            return "";
        }
        else {
            return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
        }
    }
    static formatStringDateToDate(date) {
        return new Date(this.formatDateInsertDatabase(date));
    }
}
exports.UtilsDate = UtilsDate;
//# sourceMappingURL=utils.format-time.common.js.map