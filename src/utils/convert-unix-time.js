function ConvertUnixTime(UnixTimeStamp, displayTime) {
  const dateTime = (UnixTimeStamp, displayTime) => {
    let timeNow = new Date(Date.now());
    let a = new Date(UnixTimeStamp * 1000);

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
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let outputDate = date + " " + month;
    let outputTime = hour + ":" + min;
    if (displayTime == 0) {
      if (
        timeNow.getDate() == a.getDate() &&
        timeNow.getMonth() == timeNow.getMonth()
      ) {
        return "Today";
      } else {
        return outputDate;
      }
    } else {
      return outputTime;
    }
  };

  let newTime = dateTime(UnixTimeStamp, displayTime);

  return newTime;
}

export default ConvertUnixTime;
