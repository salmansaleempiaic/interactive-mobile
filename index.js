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
      day = "Dimanche";
      document.getElementById("day").innerHTML = day;
      break;
    case 1:
      day = "Lundi";
      document.getElementById("day").innerHTML = day;
      break;
    case 2:
      day = "Mardi";
      document.getElementById("day").innerHTML = day;
      break;
    case 3:
      day = "Mercredi";
      document.getElementById("day").innerHTML = day;
      break;
    case 4:
      day = "Jeudi";
      document.getElementById("day").innerHTML = day;
      break;
    case 5:
      day = "Vendredi";
      document.getElementById("day").innerHTML = day;
      break;
    case 6:
      day = "Samedi";
      document.getElementById("day").innerHTML = day;
  }
};

const currentMonth = () => {
  switch (new Date().getMonth()) {
    case 0:
      day = " Janvier";
      document.getElementById("month").innerHTML = day;
      break;
    case 1:
      day = " Février";
      document.getElementById("month").innerHTML = day;
      break;
    case 2:
      day = " Mars";
      document.getElementById("month").innerHTML = day;
      break;
    case 3:
      day = " Avril";
      document.getElementById("month").innerHTML = day;
      break;
    case 4:
      day = " Mai";
      document.getElementById("month").innerHTML = day;
      break;
    case 5:
      day = " Juin";
      document.getElementById("month").innerHTML = day;
      break;
    case 6:
      day = " Juillet";
      document.getElementById("month").innerHTML = day;
    case 7:
      day = " Août";
      document.getElementById("month").innerHTML = day;
      break;
    case 8:
      day = " Septembre";
      document.getElementById("month").innerHTML = day;
      break;
    case 9:
      day = " Octobre";
      document.getElementById("month").innerHTML = day;
      break;
    case 10:
      day = " Novembre";
      document.getElementById("month").innerHTML = day;
      break;
    case 11:
      day = " Décembre";
      document.getElementById("month").innerHTML = day;
      break;
  }
};

const screenSize = () => {
  return parseInt(window.innerWidth);
};

window.setInterval(currentHoursAndMinutes, 1000);
window.setInterval(currentDate, 1000);
window.setInterval(currentDay, 1000);
window.setInterval(currentMonth, 1000);
// window.setInterval(screenSize, 1000);

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
const BG_POPUP = document.getElementById("bg-popup");
const CONTAINER = document.getElementById("container");
const POPUP_CONTENT = document.getElementById("popup-content");
const CUSTOM_HEADING = document.getElementById("custom-heading");
// Pop Up
//

const afterPOPstyle = () => {
  POPUP.style.display = "block";
  POPUP.style.position = "relative";
  POPUP.style.left = "170%";
  POPUP.style.height = "650px";
  POPUP.style.width = "170%";
  POPUP.style.top = "-40%";
  //
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  //
  SEARCH_BAR.style.top = "-125.6%";
  DISPLAY_TIME.style.top = "-115.6%";
  ICONS.style.top = "-105.6%";
  TEXT.style.top = "-105.6%";
  ICONS1.style.top = "-100.6%";
  TEXT1.style.top = "-100.6%";
  ICONS2.style.top = "-96.6%";
  TEXT2.style.top = "-96.6%";
  // CONTAINER.style.left = "-15rem";
};

function screen_resize1() {
  let w = screenSize();

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon1();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/sky.jpeg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "<a href='[url-here]'>Click</a>";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 1
    CUSTOM_HEADING.innerHTML = "HEADING1";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 1
  }
}

function screen_resize2() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon2();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/heart.jpg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIIII2";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 2
    CUSTOM_HEADING.innerHTML = "HEADING2";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 2
  }
}

function screen_resize3() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon3();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/planet.jpg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIII3";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 3
    CUSTOM_HEADING.innerHTML = "HEADING3";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 3
  }
}

function screen_resize4() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon4();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/sky.jpeg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIIII4";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 4
    CUSTOM_HEADING.innerHTML = "HEADING4";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 4
  }
}

function screen_resize5() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon5();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/sky.jpeg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIIII5";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 5
    CUSTOM_HEADING.innerHTML = "HEADING5";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 5
  }
}

function screen_resize6() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon6();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/sky.jpeg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIII6";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 6
    CUSTOM_HEADING.innerHTML = "HEADING6";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 6
  }
}

function screen_resize7() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon7();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/sky.jpeg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIIII7";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 7
    CUSTOM_HEADING.innerHTML = "HEADING7";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 7
  }
}

function screen_resize8() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon8();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/sky.jpeg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIIII8";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 8
    CUSTOM_HEADING.innerHTML = "HEADING8";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 8
  }
}

function screen_resize9() {
  let w = parseInt(window.innerWidth);

  if (w <= 1023) {
    //max-width 500px
    // actions here...
    popUPicon9();
  } else {
    afterPOPstyle();

    BG_POPUP.style.background = "url('./assets/sky.jpeg')";
    //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
    BG_POPUP.style.backgroundSize = "cover";
    POPUP_CONTENT.innerHTML = "HIIIIIII9";
    // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 9
    CUSTOM_HEADING.innerHTML = "HEADING9";
    // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 9
  }
}

let z =
  "My name is SALMAN UL SALEEM and I belong from Faisalabad and country is PAKISTAN. I am 29 and working as a FREELANCE WEB DEVELOPER on UPWORK. I wish you luck My name is SALMAN UL SALEEM and I belong from Faisalabad and country is PAKISTAN. I am 29 and working as a FREELANCE WEB DEVELOPER on UPWORK. I wish you luckMy name is SALMAN UL SALEEM and I belong from Faisalabad and country is PAKISTAN. I am 29 and working as a FREELANCE WEB DEVELOPER on UPWORK. I wish you luckMy name is SALMAN UL SALEEM and I belong from Faisalabad and country is PAKISTAN. I am 29 and working as a FREELANCE WEB DEVELOPER on UPWORK. I wish you luckMy name is SALMAN UL SALEEM and I belong from Faisalabad and country is PAKISTAN. I am 29 and working as a FREELANCE WEB DEVELOPER on UPWORK. I wish you luckMy name is SALMAN UL SALEEM and I belong from Faisalabad and country is PAKISTAN. I am 29 and working as a FREELANCE WEB DEVELOPER on UPWORK. I wish you luckMy name is SALMAN UL SALEEM and I belong from Faisalabad and country is PAKISTAN. I am 29 and working as a FREELANCE WEB DEVELOPER on UPWORK. I wish you luck";
//
const popUPicon1 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/sky.jpeg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  POPUP_CONTENT.innerHTML = z;
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 1
  CUSTOM_HEADING.innerHTML = "HEADING1";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 1

  BG_POPUP.style.backgroundSize = "cover";
};
const popUPicon2 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/heart.jpg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'

  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIII2";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 2
  CUSTOM_HEADING.innerHTML = "HEADING2";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 2
};
const popUPicon3 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/planet.jpg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIIII3";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 3
  CUSTOM_HEADING.innerHTML = "HEADING3";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 3
};
const popUPicon4 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/sky.jpeg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIIII4";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 4
  CUSTOM_HEADING.innerHTML = "HEADING4";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 4
};
const popUPicon5 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/sky.jpeg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIIII5";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 5
  CUSTOM_HEADING.innerHTML = "HEADING5";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 5
};
const popUPicon6 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/sky.jpeg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIIII6";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 6
  CUSTOM_HEADING.innerHTML = "HEADING6";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 6
};
const popUPicon7 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/sky.jpeg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIIII7";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 7
  CUSTOM_HEADING.innerHTML = "HEADING7";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 7
};
const popUPicon8 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background = "url('./assets/sky.jpeg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIIII8";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 8
  CUSTOM_HEADING.innerHTML = "HEADING8";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 8
};
const popUPicon9 = () => {
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
  POPUP.style.background = "white";
  POPUP.style.color = "black";
  BG_POPUP.style.background =
    "url('https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg')";
  //  CHANGE './assets/sky.jpeg' with 'LINK_OF THE IMAGE'
  BG_POPUP.style.backgroundSize = "cover";
  POPUP_CONTENT.innerHTML = "HIIIIIII9";
  // PUT THE TEXT in the above line between INVERTED COMMAS for BUTTON 9
  CUSTOM_HEADING.innerHTML = "HEADING9";
  // PUT THE HEADING in the above line between INVERTED COMMAS for BUTTON 9
};

IMG1.addEventListener("click", screen_resize1);
IMG2.addEventListener("click", screen_resize2);
IMG3.addEventListener("click", screen_resize3);
IMG4.addEventListener("click", screen_resize4);
IMG5.addEventListener("click", screen_resize5);
IMG6.addEventListener("click", screen_resize6);
IMG7.addEventListener("click", screen_resize7);
IMG8.addEventListener("click", screen_resize8);
IMG9.addEventListener("click", screen_resize9);

const popDOWN = () => {
  POPUP.style.display = "none";
  SEARCH_BAR.style.display = "block";
  SEARCH_BAR.style.top = "-30%";
  DISPLAY_TIME.style.display = "block";
  DISPLAY_TIME.style.top = "-20%";
  ICONS.style.display = "block";
  ICONS.style.top = "-10%";
  TEXT.style.display = "block";
  TEXT.style.top = "-10%";
  ICONS1.style.display = "block";
  ICONS1.style.top = "-5%";
  TEXT1.style.display = "block";
  TEXT1.style.top = "-5%";
  ICONS2.style.display = "block";
  ICONS2.style.top = "-1%";
  TEXT2.style.display = "block";
  TEXT2.style.top = "-1%";
  SCREEN_BORDER.style.background = "url('./assets/background.png')";
  SCREEN_BORDER.style.backgroundSize = "cover";
  CONTAINER.style.left = "0";
};
POPUP.addEventListener("click", popDOWN);
