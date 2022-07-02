"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProcedureGetTimeDatabase = void 0;
const moment = require("moment");
const utils_group_by_time_enum_1 = require("../utils.enum/utils.group-by-time.enum");
const utils_report_type_enum_1 = require("../utils.enum/utils.report-type.enum");
const utils_get_time_database_1 = require("./utils.get.time.database");
class StoreProcedureGetTimeDatabase {
    constructor(time_type) {
        this.time_type = time_type;
    }
    getTimeType() {
        let listTimeType = [
            utils_report_type_enum_1.ReportTypeEnum.HOUR,
            utils_report_type_enum_1.ReportTypeEnum.DAY,
            utils_report_type_enum_1.ReportTypeEnum.WEEK,
            utils_report_type_enum_1.ReportTypeEnum.MONTH,
            utils_report_type_enum_1.ReportTypeEnum.NEAREST_THREE_MONTHS,
            utils_report_type_enum_1.ReportTypeEnum.YEAR,
            utils_report_type_enum_1.ReportTypeEnum.THREE_YEARS,
            utils_report_type_enum_1.ReportTypeEnum.ALL_MONTHS,
            utils_report_type_enum_1.ReportTypeEnum.ALL_YEAR,
            utils_report_type_enum_1.ReportTypeEnum.YESTERDAY,
            utils_report_type_enum_1.ReportTypeEnum.LAST_MONTH,
            utils_report_type_enum_1.ReportTypeEnum.LAST_YEAR
        ];
        let from_date = "";
        let to_date = "";
        let group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_YEAR;
        if (listTimeType.includes(Number(this.time_type))) {
            switch (Number(this.time_type)) {
                case utils_report_type_enum_1.ReportTypeEnum.HOUR:
                    from_date = moment().format("YYYY-MM-DD");
                    to_date = moment().add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_HOUR;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.DAY:
                    from_date = moment().format("YYYY-MM-DD");
                    to_date = moment().add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_HOUR;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.WEEK:
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
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_WEEK;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.MONTH:
                    from_date = moment().startOf("month").format("YYYY-MM-DD");
                    to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_DAY;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.LAST_MONTH:
                    from_date = moment()
                        .startOf("month")
                        .subtract(1, "month")
                        .format("YYYY-MM-DD");
                    to_date = moment()
                        .subtract(1, "month")
                        .endOf("month")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_DAY;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.NEAREST_THREE_MONTHS:
                    from_date = moment()
                        .startOf("month")
                        .subtract(2, "month")
                        .format("YYYY-MM-DD");
                    to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.YEAR:
                    from_date = moment().startOf("year").format("YYYY-MM-DD");
                    to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.THREE_YEARS:
                    from_date = moment()
                        .startOf("year")
                        .subtract(2, "year")
                        .format("YYYY-MM-DD");
                    to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_MONTH;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.YESTERDAY:
                    from_date = moment().subtract(1, "day").format("YYYY-MM-DD");
                    to_date = moment().format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_DAY;
                    break;
                case utils_report_type_enum_1.ReportTypeEnum.LAST_YEAR:
                    from_date = moment()
                        .startOf("year")
                        .subtract(1, "year")
                        .format("YYYY-MM-DD");
                    to_date = moment()
                        .endOf("year")
                        .subtract(1, "year")
                        .add(1, "day")
                        .format("YYYY-MM-DD");
                    group_type = utils_group_by_time_enum_1.GroupByTimeEnum.GROUP_MONTH;
                    break;
                default:
                    return null;
            }
            return new utils_get_time_database_1.GetTimeDataBase(from_date, to_date, Number(group_type));
        }
        else {
            return null;
        }
    }
}
exports.StoreProcedureGetTimeDatabase = StoreProcedureGetTimeDatabase;
module.exports = { StoreProcedureGetTimeDatabase };
//# sourceMappingURL=utils.format-store-procdure.get.time.database.js.map