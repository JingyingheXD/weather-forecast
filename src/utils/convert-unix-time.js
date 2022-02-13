function ConvertUnixTime(UnixTimeStamp) {
  const dateTime = (UnixTimeStamp) => {
    let timeNow = new Date(Date.now());
    let a = new Date(UnixTimeStamp * 1000);

    if (
      timeNow.getDate() == a.getDate() &&
      timeNow.getMonth() == timeNow.getMonth()
    ) {
      return "Today";
    }
    var months = [
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
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + " " + month;
    return time;
  };

  let newTime = dateTime(UnixTimeStamp);

  return newTime;
}

export default ConvertUnixTime;
