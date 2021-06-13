//Data
const JUNE = {
  daysBeforeStart: "2",
  daysInMonth: 30,
  1: "",
  2: `WED AM TENNIS <br/> 9-11 am`,
  3: "",
  4: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  5: "",
  6: "",
  7: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  8: `Jr Program <br/> 5-6pm  2 courts <br/> 6-7pm  1 court <br/><br/>
     ADULT TENNIS <br/> 7-10 pm`,
  9: `WED AM TENNIS <br/> 9-11 am`,
  10: "",
  11: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  12: "",
  13: "",
  14: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  15: `Jr Program <br/> 5-6pm  2 courts <br/> 6-7pm  1 court <br/><br/>
  ADULT TENNIS <br/> 7-10 pm`,
  16: `WED AM TENNIS <br/> 9-11 am`,
  17: "",
  18: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  19: "",
  20: "",
  21: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  22: `Jr Program <br/> 5-6pm  2 courts <br/> 6-7pm  1 court <br/><br/>
  ADULT TENNIS <br/> 7-10 pm`,
  23: `WED AM TENNIS <br/> 9-11 am`,
  24: "",
  25: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  26: "",
  27: "",
  28: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  29: `Jr Program <br/> 5-6pm  2 courts <br/> 6-7pm  1 court <br/><br/>
  ADULT TENNIS <br/> 7-10 pm`,
  30: `WED AM TENNIS <br/> 9-11 am`,
  31: "MIXED SENIOR \n DOUBLES \n 8-10 am", //TYPO?
};

const JULY = {
  daysBeforeStart: "4",
  daysInMonth: 31,
  1: "Canada Day",
  2: "MIXED SENIOR \n DOUBLES \n 8-10 am",
  3: "",
  4: "",
  5: `<b>NIKE SUMMER CAMP 9-3:30
    2 courts 
    10-12:30/2-3:30
    1 court 9-10/1-2 </b>`,
  6: `<b>NIKE SUMMER CAMP 9-3:30
  2 courts 
  10-12:30/2-3:30
  1 court 9-10/1-2 </b>`,
  7: `<b>NIKE SUMMER CAMP 9-3:30
  2 courts 
  10-12:30/2-3:30
  1 court 9-10/1-2 </b>`,
  8: `<b>NIKE SUMMER CAMP 9-3:30
  2 courts 
  10-12:30/2-3:30
  1 court 9-10/1-2 </b>`,
  9: `<b>NIKE SUMMER CAMP 9-3:30
  2 courts 
  10-12:30/2-3:30
  1 court 9-10/1-2 </b>`,
  10: "",
  11: "",
  12: `MIXED SENIOR <br/> DOUBLES <br/> 8-10 am `,
  13: `ADULT TENNIS <br/> 7-10 pm `,
  14: `WED AM TENNIS <br/> 9-11 am`,
  15: "",
  16: `MIXED SENIOR <br/> DOUBLES <br/> 8-10 am`,
  17: "",
  18: "",
  19: `MIXED SENIOR <br/> DOUBLES <br/> 8-10 am `,
  20: `ADULT TENNIS <br/> 7-10 pm `,
  21: `WED AM TENNIS <br/> 9-11 am`,
  22: "",
  23: `MIXED SENIOR <br/> DOUBLES <br/> 8-10 am`,
  24: "",
  25: "",
  26: `MIXED SENIOR <br/> DOUBLES <br/> 8-10 am `,
  27: `ADULT TENNIS <br/> 7-10 pm `,
  28: `WED AM TENNIS <br/> 9-11 am`,
  29: "",
  30: `MIXED SENIOR <br/> DOUBLES <br/> 8-10 am`,
  31: "",
};

$(document).ready(function () {
  // Display july calendar
  $("#july").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $("#july").addClass("is-active");
    $("#june").removeClass("is-active");
    $(".june-calendar").addClass("invisible");
    $(".july-calendar").removeClass("invisible");
  });

  // Display June calendar
  $("#june").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $("#june").addClass("is-active");
    $("#july").removeClass("is-active");
    $(".july-calendar").addClass("invisible");
    $(".june-calendar").removeClass("invisible");
  });

  //june
  $(".days-june").append(() => {
    //empty days
    let emptyDays = "<li></li>";
    emptyDays = emptyDays.repeat(JUNE.daysBeforeStart);

    //full days
    let daysHtml = "";
    for (let i = 1; i <= JUNE.daysInMonth; i++) {
      daysHtml += `<li> ${i} <p>${JUNE[i]}</p></li>`;
    }

    return emptyDays + daysHtml;
  });

  //july
  $(".days-july").append(() => {
    //empty days
    let emptyDays = "<li></li>";
    emptyDays = emptyDays.repeat(JULY.daysBeforeStart);

    //full days
    let daysHtml = "";
    for (let i = 1; i <= JULY.daysInMonth; i++) {
      daysHtml += `<li> ${i} <p>${JULY[i]}</p></li>`;
    }

    return emptyDays + daysHtml;
  });
});
