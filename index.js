const currentHoursAndMinutes = () => {
  let Dates = new Date();
  let currentHours = Dates.getHours();
  let currentMinutes = Dates.getMinutes();
  let hours = currentHours.toString().length;
  let minutes = currentMinutes.toString().length;
  if (hours <= 1 && minutes <= 1) {
    currentHours = "0" + currentHours;
    currentMinutes = "0" + currentMinutes;
    setDOM(currentHours, currentMinutes);
  } else if (hours <= 1 && minutes >= 2) {
    currentHours = "0" + currentHours;
    setDOM(currentHours, currentMinutes);
  } else if (hours >= 1 && minutes <= 1) {
    currentMinutes = "0" + currentMinutes;
    setDOM(currentHours, currentMinutes);
  } else if (hours >= 2 && minutes >= 2) {
    setDOM(currentHours, currentMinutes);
  }
};
const setDOM = (currentHours, currentMinutes) => {
  document.getElementById("minute").innerHTML = currentMinutes;
  document.getElementById("hour").innerHTML = currentHours;
  document.getElementById("hours").innerHTML = currentHours;
  document.getElementById("minutes").innerHTML = currentMinutes;
};

const currentDate = () => {
  let Dates = new Date();
  let currentDate = Dates.getDate();
  if (currentDate.toString().length <= 1) {
    currentDate = "0" + currentDate;
    document.getElementById("date").innerHTML = currentDate;
  } else {
    document.getElementById("date").innerHTML = currentDate;
  }
};

const currentDay = () => {
  switch (new Date().getDay()) {
    case 0:
      day = "SUN";
      document.getElementById("day").innerHTML = day;
      break;
    case 1:
      day = "MON";
      document.getElementById("day").innerHTML = day;
      break;
    case 2:
      day = "TUE";
      document.getElementById("day").innerHTML = day;
      break;
    case 3:
      day = "WED";
      document.getElementById("day").innerHTML = day;
      break;
    case 4:
      day = "THU";
      document.getElementById("day").innerHTML = day;
      break;
    case 5:
      day = "FRI";
      document.getElementById("day").innerHTML = day;
      break;
    case 6:
      day = "SAT";
      document.getElementById("day").innerHTML = day;
  }
};

window.setInterval(currentHoursAndMinutes, 1000);
window.setInterval(currentDate, 1000);
window.setInterval(currentDay, 1000);
