import dayjs from "dayjs";

// function ConvertUnixTime(UnixTimeStamp, displayTime) {
//   const dateTime = (UnixTimeStamp, displayTime) => {
//     let timeNow = new Date(Date.now());
//     let a = new Date(UnixTimeStamp * 1000);

//     let months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     let month = months[a.getMonth()];
//     let date = a.getDate();
//     let hour = a.getHours();
//     let min = a.getMinutes();
//     if (hour < 10){

//     }
//     let outputDate = date + " " + month;
//     let outputTime = hour + ":" + min;
//     if (displayTime == 0) {
//       if (
//         timeNow.getDate() == a.getDate() &&
//         timeNow.getMonth() == timeNow.getMonth()
//       ) {
//         return "Today";
//       } else {
//         return outputDate;
//       }
//     } else {
//       return outputTime;
//     }
//   };

//   let newTime = dateTime(UnixTimeStamp, displayTime);

//   return newTime;
// }

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
    let outputTime = hour + " " + minute;

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
