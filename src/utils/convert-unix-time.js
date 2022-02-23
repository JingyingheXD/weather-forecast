import dayjs from "dayjs";

function ConvertUnixTime(UnixTimeStamp, displayTime) {
  const dateTime = (UnixTimeStamp, displayTime) => {
    let timeNow = dayjs();
    let a = dayjs.unix(UnixTimeStamp);

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let month = a.month();
    let date = a.date();
    let hour = a.hour();
    let minute = a.minute();

    let outputDate = date + " " + months[month];
    let outputTime = a.format("HH:mm");

    if (displayTime == 0) {
      if (timeNow.date() == date && timeNow.month == month) {
        return "Today";
      } else {
        return outputDate;
      }
    } else {
      return outputTime;
    }
  };

  let output = dateTime(UnixTimeStamp, displayTime);

  return output;
}

export default ConvertUnixTime;
