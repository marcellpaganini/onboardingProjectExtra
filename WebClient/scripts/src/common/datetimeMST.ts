import { types } from "mobx-state-tree";
import moment from "moment";


const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export const DateTime = types.custom({
  name: "DateTime",
  fromSnapshot: string => moment.utc(string, DATE_FORMAT).local(),
  toSnapshot: (mDate: moment.Moment) => mDate.format(DATE_FORMAT),
  isTargetType: maybeMoment => moment.isMoment(maybeMoment),
  getValidationMessage: snapshot => {
    if (snapshot === undefined) return "";
    const mDate = moment(snapshot, DATE_FORMAT, true);
    if (!mDate.isValid()) {
      const message = `"${snapshot}" is not in valid date format ${DATE_FORMAT}`;
      console.error(message);
      return message;
    }
    return "";
  }
});