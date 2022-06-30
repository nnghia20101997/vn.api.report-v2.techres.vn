import * as moment from "moment";

const {
  HOUR,
  DAY,
  WEEK,
  MONTH,
  NEAREST_THREE_MONTHS,
  YEAR,
  THREE_YEARS,
  ALL_MONTHS,
  ALL_YEAR,
  YESTERDAY,
  LAST_MONTH,
  LAST_YEAR,
} = require("./../utils.common/utils.enum/utils.report-type.enum");
const {
  GROUP_HOUR,
  GROUP_DAY,
  GROUP_WEEK,
  GROUP_MONTH,
  GROUP_YEAR,
} = require("./../utils.common/utils.enum/utils.group-by-time.enum");

export class StoreProcedureGetTimeDatabase {
  public time_type: reportTypeEnum;
  constructor(time_type) {
    this.time_type = time_type;
  }

  public getTimeType() {
    let listTimeType = [
      HOUR,
      DAY,
      WEEK,
      MONTH,
      NEAREST_THREE_MONTHS,
      YEAR,
      THREE_YEARS,
      ALL_MONTHS,
      ALL_YEAR,
      YESTERDAY,
      LAST_MONTH,
      LAST_YEAR,
    ];
    let from_date = "";
    let to_date = "";
    let group_type = YEAR;

    if (listTimeType.includes(this.time_type)) {
      switch (this.time_type) {
        case HOUR:
          from_date = moment().format("YYYY-MM-DD");
          to_date = moment().add(1, "day").format("YYYY-MM-DD");
          group_type = GROUP_HOUR;
          break;

        case DAY:
          from_date = moment().format("YYYY-MM-DD");
          to_date = moment().add(1, "day").format("YYYY-MM-DD");
          group_type = GROUP_HOUR;
          break;

        case WEEK:
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
          group_type = GROUP_WEEK;
          break;

        case MONTH:
          from_date = moment().startOf("month").format("YYYY-MM-DD");
          to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          group_type = GROUP_DAY;
          break;

        case LAST_MONTH:
          from_date = moment()
            .startOf("month")
            .subtract(1, "month")
            .format("YYYY-MM-DD");
          to_date = moment()
            .subtract(1, "month")
            .endOf("month")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = GROUP_DAY;
          break;

        case NEAREST_THREE_MONTHS:
          from_date = moment()
            .startOf("month")
            .subtract(2, "month")
            .format("YYYY-MM-DD");
          to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          group_type = GROUP_MONTH;
          break;

        case YEAR:
          from_date = moment().startOf("year").format("YYYY-MM-DD");
          to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          group_type = GROUP_MONTH;
          break;

        case THREE_YEARS:
          from_date = moment()
            .startOf("year")
            .subtract(2, "year")
            .format("YYYY-MM-DD");
          to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          group_type = GROUP_MONTH;
          break;

        case YESTERDAY:
          from_date = moment().subtract(1, "day").format("YYYY-MM-DD");
          to_date = moment().format("YYYY-MM-DD");
          group_type = GROUP_DAY;
          break;

        case LAST_YEAR:
          from_date = moment()
            .startOf("year")
            .subtract(1, "year")
            .format("YYYY-MM-DD");
          to_date = moment()
            .endOf("year")
            .subtract(1, "year")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = GROUP_MONTH;
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
}
module.exports = { StoreProcedureGetTimeDatabase };
