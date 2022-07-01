import { ParseIntPipe } from "@nestjs/common";
import * as moment from "moment";
import { GroupByTimeEnum } from "../utils.enum/utils.group-by-time.enum";
import { ReportTypeEnum } from "../utils.enum/utils.report-type.enum";
import { GetTimeDataBase } from "./utils.get.time.database";

export class StoreProcedureGetTimeDatabase {
  public time_type: number;
  constructor(time_type:number) {
    this.time_type = time_type;
  }



 
  

  public getTimeType(): GetTimeDataBase {

    
    let listTimeType = [
      ReportTypeEnum.HOUR,
     ReportTypeEnum.DAY,
     ReportTypeEnum.WEEK,
     ReportTypeEnum.MONTH,
     ReportTypeEnum.NEAREST_THREE_MONTHS,
     ReportTypeEnum.YEAR,
     ReportTypeEnum.THREE_YEARS,
     ReportTypeEnum.ALL_MONTHS,
     ReportTypeEnum.ALL_YEAR,
     ReportTypeEnum.YESTERDAY,
     ReportTypeEnum.LAST_MONTH,
     ReportTypeEnum.LAST_YEAR
    ];
    let from_date = "";
    let to_date = "";
    let group_type = GroupByTimeEnum.GROUP_YEAR;

  
    

    if (listTimeType.includes(Number(this.time_type))) {
      switch (Number(this.time_type)) {
        case ReportTypeEnum.HOUR:
          from_date = moment().format("YYYY-MM-DD");
          to_date = moment().add(1, "day").format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_HOUR;
          break;

        case ReportTypeEnum.DAY:
          from_date = moment().format("YYYY-MM-DD");
          to_date = moment().add(1, "day").format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_HOUR;
          break;

        case ReportTypeEnum.WEEK:
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
          group_type = GroupByTimeEnum.GROUP_WEEK;
          break;

        case ReportTypeEnum.MONTH:
          from_date = moment().startOf("month").format("YYYY-MM-DD");
          to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_DAY;
          break;

        case ReportTypeEnum.LAST_MONTH:
          from_date = moment()
            .startOf("month")
            .subtract(1, "month")
            .format("YYYY-MM-DD");
          to_date = moment()
            .subtract(1, "month")
            .endOf("month")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_DAY;
          break;

        case ReportTypeEnum.NEAREST_THREE_MONTHS:
          from_date = moment()
            .startOf("month")
            .subtract(2, "month")
            .format("YYYY-MM-DD");
          to_date = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_MONTH;
          break;

        case ReportTypeEnum.YEAR:
          from_date = moment().startOf("year").format("YYYY-MM-DD");
          to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_MONTH;
          break;

        case ReportTypeEnum.THREE_YEARS:
          from_date = moment()
            .startOf("year")
            .subtract(2, "year")
            .format("YYYY-MM-DD");
          to_date = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_MONTH;
          break;

        case ReportTypeEnum.YESTERDAY:
          from_date = moment().subtract(1, "day").format("YYYY-MM-DD");
          to_date = moment().format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_DAY;
          break;

        case ReportTypeEnum.LAST_YEAR:
          from_date = moment()
            .startOf("year")
            .subtract(1, "year")
            .format("YYYY-MM-DD");
          to_date = moment()
            .endOf("year")
            .subtract(1, "year")
            .add(1, "day")
            .format("YYYY-MM-DD");
          group_type = GroupByTimeEnum.GROUP_MONTH;
          break;
        default:
          return null;
      }

      return new GetTimeDataBase(from_date,to_date, Number(group_type));
    } else {
      return null;
    }
  }
}
module.exports = { StoreProcedureGetTimeDatabase };
