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

// Elements Capture

const IMG1 = document.getElementById("img1");
const IMG2 = document.getElementById("img2");
const IMG3 = document.getElementById("img3");
const IMG4 = document.getElementById("img4");
const IMG5 = document.getElementById("img5");
const IMG6 = document.getElementById("img6");
const IMG7 = document.getElementById("img7");
const IMG8 = document.getElementById("img8");
const IMG9 = document.getElementById("img9");
const POPUP = document.getElementById("pop-up");
const SEARCH_BAR = document.getElementById("search-bar");
const DISPLAY_TIME = document.getElementById("display-time");
const ICONS = document.getElementById("icons");
const TEXT = document.getElementById("texts");
const ICONS1 = document.getElementById("icons-1");
const TEXT1 = document.getElementById("texts-1");
const ICONS2 = document.getElementById("icons-2");
const TEXT2 = document.getElementById("texts-2");
const SCREEN_BORDER = document.getElementById("screen-border");
// Pop Up

const popUP = () => {
  SCREEN_BORDER.style.background = "none";
  SCREEN_BORDER.style.backgroundColor = "black";
  POPUP.style.display = "block";
  SEARCH_BAR.style.display = "none";
  DISPLAY_TIME.style.display = "none";
  ICONS.style.display = "none";
  TEXT.style.display = "none";
  ICONS1.style.display = "none";
  TEXT1.style.display = "none";
  ICONS2.style.display = "none";
  TEXT2.style.display = "none";
};

IMG1.addEventListener("click", popUP);
IMG2.addEventListener("click", popUP);
IMG3.addEventListener("click", popUP);
IMG4.addEventListener("click", popUP);
IMG5.addEventListener("click", popUP);
IMG6.addEventListener("click", popUP);
IMG7.addEventListener("click", popUP);
IMG8.addEventListener("click", popUP);
IMG9.addEventListener("click", popUP);

const popDOWN = () => {
  POPUP.style.display = "none";
  SEARCH_BAR.style.display = "block";
  DISPLAY_TIME.style.display = "block";
  ICONS.style.display = "block";
  TEXT.style.display = "block";
  ICONS1.style.display = "block";
  TEXT1.style.display = "block";
  ICONS2.style.display = "block";
  TEXT2.style.display = "block";
  SCREEN_BORDER.style.background = "url('./assets/background.png')";
  SCREEN_BORDER.style.backgroundSize = "cover";
};
POPUP.addEventListener("dblclick", popDOWN);
