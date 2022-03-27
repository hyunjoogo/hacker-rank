const s = "07:05:45PM";
const timeConversion = (s) => {
  console.log(s)
  const onlyTime = s.slice(0, 8);
  const dayOrNight = s.slice(-2);
  const timeArray = onlyTime.split(":");

  let hour = timeArray[0];
  let minute = timeArray[1];
  let second= timeArray[2];

  if (dayOrNight === "PM") {
    hour = Number(timeArray[0]) + 12;
  }
  console.log(`${hour}:${minute}:${second}`)

};

timeConversion(s)
