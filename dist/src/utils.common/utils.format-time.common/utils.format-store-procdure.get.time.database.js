"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProcedureGetTimeDatabase = void 0;
const moment = require("moment");
const utils_get_time_database_1 = require("./utils.get.time.database");
const utils_report_type_enum_1 = require("../utils.enum/utils.report-type.enum");
const utils_group_by_time_enum_1 = require("../utils.enum/utils.group-by-time.enum");
class StoreProcedureGetTimeDatabase {
    constructor(time_type, date_time) {
        this.time_type = time_type;
        this.date_time = date_time;
    }
    getTimeType() {
        let listTimeType = [
            utils_report_type_enum_1.reportTypeEnum.HOUR,
            utils_report_type_enum_1.reportTypeEnum.DAY,
            utils_report_type_enum_1.reportTypeEnum.WEEK,
            utils_report_type_enum_1.reportTypeEnum.MONTH,
            utils_report_type_enum_1.reportTypeEnum.NEAREST_THREE_MONTHS,
            utils_report_type_enum_1.reportTypeEnum.YEAR,
            utils_report_type_enum_1.reportTypeEnum.THREE_YEARS,
            utils_report_type_enum_1.reportTypeEnum.ALL_MONTHS,
            utils_report_type_enum_1.reportTypeEnum.ALL_YEAR,
            utils_report_type_enum_1.reportTypeEnum.YESTERDAY,
            utils_report_type_enum_1.reportTypeEnum.LAST_MONTH,
            utils_report_type_enum_1.reportTypeEnum.LAST_YEAR,
        ];
        let from_date = "";
        let to_date = "";
        let group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_YEAR;
        if (listTimeType.includes(Number(this.time_type))) {
            switch (Number(this.time_type)) {
                case utils_report_type_enum_1.reportTypeEnum.HOUR:
                    from_date = moment().format("YYYY-MM-DD");
                    to_date = moment().add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_HOUR;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.DAY:
                    from_date = moment().format("YYYY-MM-DD");
                    to_date = moment().add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_HOUR;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.WEEK:
                    from_date = moment()
                        .startOf("week")
                        .isoWeekday(1)
                        .add(7, "day")
                        .format("YYYY-MM-DD");
                    to_date = moment()
                        .startOf("week")
                        .isoWeekday(1)
                        .add(7, "day")
                        .add(7, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_WEEK;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.MONTH:
                    from_date = moment().startOf("month").format("YYYY-MM-DD");
                    to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_DAY;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.NEAREST_THREE_MONTHS:
                    from_date = moment()
                        .startOf("month")
                        .subtract(2, "month")
                        .format("YYYY-MM-DD");
                    to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.YEAR:
                    from_date = moment().startOf("year").format("YYYY-MM-DD");
                    to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.THREE_YEARS:
                    from_date = moment()
                        .startOf("year")
                        .subtract(2, "year")
                        .format("YYYY-MM-DD");
                    to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_YEAR;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.YESTERDAY:
                    from_date = moment().subtract(1, "day").format("YYYY-MM-DD");
                    to_date = moment().format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_HOUR;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.LAST_MONTH:
                    from_date = moment()
                        .startOf("month")
                        .subtract(1, "month")
                        .format("YYYY-MM-DD");
                    to_date = moment()
                        .subtract(1, "month")
                        .endOf("month")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_DAY;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.LAST_YEAR:
                    from_date = moment()
                        .startOf("year")
                        .subtract(1, "year")
                        .format("YYYY-MM-DD");
                    to_date = moment()
                        .endOf("year")
                        .subtract(1, "year")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_MONTH;
                    break;
                default:
                    return "";
            }
            return {
                from_date: from_date,
                to_date: to_date,
                group_type: group_type,
            };
        }
        else {
            return false;
        }
    }
    getTimeReport() {
        let listTimeType = [
            utils_report_type_enum_1.reportTypeEnum.HOUR,
            utils_report_type_enum_1.reportTypeEnum.DAY,
            utils_report_type_enum_1.reportTypeEnum.WEEK,
            utils_report_type_enum_1.reportTypeEnum.MONTH,
            utils_report_type_enum_1.reportTypeEnum.NEAREST_THREE_MONTHS,
            utils_report_type_enum_1.reportTypeEnum.YEAR,
            utils_report_type_enum_1.reportTypeEnum.THREE_YEARS,
            utils_report_type_enum_1.reportTypeEnum.ALL_MONTHS,
            utils_report_type_enum_1.reportTypeEnum.ALL_YEAR,
            utils_report_type_enum_1.reportTypeEnum.YESTERDAY,
            utils_report_type_enum_1.reportTypeEnum.LAST_MONTH,
            utils_report_type_enum_1.reportTypeEnum.LAST_YEAR,
        ];
        let dateTime = "";
        let from_date = "";
        let to_date = "";
        let group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_YEAR;
        if (this.date_time == "") {
            dateTime = moment().format("DD/MM/YYYY");
        }
        else {
            dateTime = this.date_time;
        }
        if (listTimeType.includes(Number(this.time_type))) {
            switch (Number(this.time_type)) {
                case utils_report_type_enum_1.reportTypeEnum.HOUR:
                    from_date = moment(dateTime, "DD/MM/YYYY").format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_HOUR;
                    break;
                case (this.time_type = utils_report_type_enum_1.reportTypeEnum.DAY):
                    from_date = moment(dateTime, "DD/MM/YYYY").format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_HOUR;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.WEEK:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("week")
                        .isoWeekday(1)
                        .add(7, "day")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("week")
                        .isoWeekday(1)
                        .add(7, "day")
                        .add(7, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_WEEK;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.MONTH:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("month")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .endOf("month")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_DAY;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.NEAREST_THREE_MONTHS:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("month")
                        .subtract(2, "month")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .endOf("month")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.YEAR:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("year")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .endOf("year")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.THREE_YEARS:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("year")
                        .subtract(2, "year")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .endOf("year")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_YEAR;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.YESTERDAY:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .subtract(1, "day")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_HOUR;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.LAST_MONTH:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("month")
                        .subtract(1, "month")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .subtract(1, "month")
                        .endOf("month")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_DAY;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.LAST_YEAR:
                    from_date = moment(dateTime, "DD/MM/YYYY")
                        .startOf("year")
                        .subtract(1, "year")
                        .format("YYYY-MM-DD");
                    to_date = moment(dateTime, "DD/MM/YYYY")
                        .endOf("year")
                        .subtract(1, "year")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.ALL_MONTHS:
                    from_date = "";
                    to_date = "";
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.reportTypeEnum.ALL_YEAR:
                    from_date = "";
                    to_date = "";
                    group_type = utils_group_by_time_enum_1.groupByTimeEnum.GROUP_YEAR;
                    break;
                default:
                    return new utils_get_time_database_1.GetTimeDataBase(from_date, to_date, -1);
            }
            return new utils_get_time_database_1.GetTimeDataBase(from_date, to_date, group_type);
        }
        else {
            return new utils_get_time_database_1.GetTimeDataBase(from_date, to_date, -1);
        }
    }
}
exports.StoreProcedureGetTimeDatabase = StoreProcedureGetTimeDatabase;
module.exports = { StoreProcedureGetTimeDatabase };
//# sourceMappingURL=utils.format-store-procdure.get.time.database.js.map