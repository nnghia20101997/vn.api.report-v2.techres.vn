import * as moment from "moment";
import { GetTimeDataBase } from "./utils.get.time.database";
import { reportTypeEnum } from "../utils.enum/utils.report-type.enum";
import { groupByTimeEnum } from "../utils.enum/utils.group-by-time.enum";

// const {
//   HOUR,
//   DAY,
//   WEEK,
//   MONTH,
//   NEAREST_THREE_MONTHS,
//   YEAR,
//   THREE_YEARS,
//   ALL_MONTHS,
//   ALL_YEAR,
//   YESTERDAY,
//   LAST_MONTH,
//   LAST_YEAR,
// } = require("../../utils.common/utils.enum/utils.report-type.enum");
// const {
//   GROUP_HOUR,
//   GROUP_DAY,
//   GROUP_WEEK,
//   GROUP_MONTH,
//   GROUP_YEAR,
// } = require("../../utils.common/utils.enum/utils.group-by-time.enum");

export class StoreProcedureGetTimeDatabase {
  public time_type: number;
  public date_time: string;

  constructor(time_type: number, date_time?: string) {
    this.time_type = time_type;
    this.date_time = date_time;
  }

  public getTimeType() {
    let listTimeType = [
      reportTypeEnum.HOUR,
      reportTypeEnum.DAY,
      reportTypeEnum.WEEK,
      reportTypeEnum.MONTH,
      reportTypeEnum.NEAREST_THREE_MONTHS,
      reportTypeEnum.YEAR,
      reportTypeEnum.THREE_YEARS,
      reportTypeEnum.ALL_MONTHS,
      reportTypeEnum.ALL_YEAR,
      reportTypeEnum.YESTERDAY,
      reportTypeEnum.LAST_MONTH,
      reportTypeEnum.LAST_YEAR,
    ];
    let from_date = "";
    let to_date = "";
    let group_type = groupByTimeEnum.GROUP_YEAR;

    if (listTimeType.includes(Number(this.time_type))) {
      switch (Number(this.time_type)) {
        case reportTypeEnum.HOUR:
          from_date = moment().format("YYYY-MM-DD");
          to_date = moment().add(1, "day").format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_HOUR;
          break;

        case reportTypeEnum.DAY:
          from_date = moment().format("YYYY-MM-DD");
          to_date = moment().add(1, "day").format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_HOUR;
          break;

        case reportTypeEnum.WEEK:
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
          group_type = groupByTimeEnum.GROUP_WEEK;
          break;

        case reportTypeEnum.MONTH:
          from_date = moment().startOf("month").format("YYYY-MM-DD");
          to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_DAY;
          break;

        case reportTypeEnum.NEAREST_THREE_MONTHS:
          from_date = moment()
            .startOf("month")
            .subtract(2, "month")
            .format("YYYY-MM-DD");
          to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_MONTH;
          break;

        case reportTypeEnum.YEAR:
          from_date = moment().startOf("year").format("YYYY-MM-DD");
          to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_MONTH;
          break;

        case reportTypeEnum.THREE_YEARS:
          from_date = moment()
            .startOf("year")
            .subtract(2, "year")
            .format("YYYY-MM-DD");
          to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_YEAR;
          break;

        case reportTypeEnum.YESTERDAY:
          from_date = moment().subtract(1, "day").format("YYYY-MM-DD");
          to_date = moment().format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_HOUR;
          break;

        case reportTypeEnum.LAST_MONTH:
          from_date = moment()
            .startOf("month")
            .subtract(1, "month")
            .format("YYYY-MM-DD");
          to_date = moment()
            .subtract(1, "month")
            .endOf("month")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_DAY;
          break;

        case reportTypeEnum.LAST_YEAR:
          from_date = moment()
            .startOf("year")
            .subtract(1, "year")
            .format("YYYY-MM-DD");
          to_date = moment()
            .endOf("year")
            .subtract(1, "year")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_MONTH;
          break;
        default:
          return "";
      }
      return {
        from_date: from_date,
        to_date: to_date,
        group_type: group_type,
      };
    } else {
      return false;
    }
  }

  public getTimeReport(): GetTimeDataBase {
    let listTimeType = [
      reportTypeEnum.HOUR,
      reportTypeEnum.DAY,
      reportTypeEnum.WEEK,
      reportTypeEnum.MONTH,
      reportTypeEnum.NEAREST_THREE_MONTHS,
      reportTypeEnum.YEAR,
      reportTypeEnum.THREE_YEARS,
      reportTypeEnum.ALL_MONTHS,
      reportTypeEnum.ALL_YEAR,
      reportTypeEnum.YESTERDAY,
      reportTypeEnum.LAST_MONTH,
      reportTypeEnum.LAST_YEAR,
    ];

    let dateTime = "";
    let from_date = "";
    let to_date = "";
    let group_type = groupByTimeEnum.GROUP_YEAR;

    if (this.date_time == "") {
      dateTime = moment().format("DD/MM/YYYY");
    } else {
      dateTime = this.date_time;
    }

    if (listTimeType.includes(Number(this.time_type))) {
      switch (Number(this.time_type)) {
        case reportTypeEnum.HOUR:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_HOUR;
          break;

        case this.time_type = reportTypeEnum.DAY:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_HOUR;
          break;

        case reportTypeEnum.WEEK:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("week")
            .isoWeekday(1)
            .add(7, "day")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("week")
            .isoWeekday(1)
            .add(7, "day")
            .add(7, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_WEEK;
          break;

        case reportTypeEnum.MONTH:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("month")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .endOf("month")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_DAY;
          break;

        case reportTypeEnum.NEAREST_THREE_MONTHS:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("month")
            .subtract(2, "month")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .endOf("month")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_MONTH;
          break;

        case reportTypeEnum.YEAR:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("year")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .endOf("year")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_MONTH;
          break;

        case reportTypeEnum.THREE_YEARS:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("year")
            .subtract(2, "year")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .endOf("year")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_YEAR;
          break;

        case reportTypeEnum.YESTERDAY:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .subtract(1, "day")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_HOUR;
          break;

        case reportTypeEnum.LAST_MONTH:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("month")
            .subtract(1, "month")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .subtract(1, "month")
            .endOf("month")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_DAY;
          break;

        case reportTypeEnum.LAST_YEAR:
          from_date = moment(dateTime, 'DD/MM/YYYY')
            .startOf("year")
            .subtract(1, "year")
            .format("YYYY-MM-DD");
          to_date = moment(dateTime, 'DD/MM/YYYY')
            .endOf("year")
            .subtract(1, "year")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = groupByTimeEnum.GROUP_MONTH;
          break;
        default:
          return new GetTimeDataBase(from_date, to_date, -1);
      }
      return new GetTimeDataBase(from_date, to_date, group_type)
    } else {
      return new GetTimeDataBase(from_date, to_date, -1);
    }
  }
}
module.exports = { StoreProcedureGetTimeDatabase };
