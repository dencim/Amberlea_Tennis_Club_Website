//Data
const JUNE = {
  daysBeforeStart: "2",
  daysInMonth: 30,
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
  31: "", //TYPO?
};

const JULY = {
  daysBeforeStart: "6",
  daysInMonth: 29,
  1: "",
  2: "",
  3: "",
  4: "Adult House League: 7pm - 10pm",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "Junior Camp: 9:00am – 12:00pm 1:00pm – 4:00pm (courts 1 & 2)",
  11: "Junior Camp: 9:00am – 12:00pm 1:00pm – 4:00pm (courts 1 & 2) <br/><br/>  Adult House League: 7pm - 10pm",
  12: "Junior Camp: 9:00am – 12:00pm 1:00pm – 4:00pm (courts 1 & 2)",
  13: "Junior Camp: 9:00am – 12:00pm 1:00pm – 4:00pm (courts 1 & 2)",
  14: "Junior Camp: 9:00am – 12:00pm 1:00pm – 4:00pm (courts 1 & 2)",
  15: "",
  16: "",
  17: "",
  18: "Adult House League: 7pm - 10pm",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "Adult House League: 7pm - 10pm",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
  31: "",
};

const AUGUST = {
  daysBeforeStart: "2",
  daysInMonth: 31,
  1: "Ladies League: 9am to 12noon (crts 1+2) <br/><br/> Adult House League: 7pm - 10pm",
  2: "",
  3: "",
  4: "",
  5: ``,
  6: "",
  7: ``,
  8: `Adult House League: 7pm - 10pm`,
  9: "",
  10: "",
  11: "",
  12: ``,
  13: "",
  14: ``,
  15: "Ladies League: 9am to 12noon (crts 1+2) <br/><br/> Adult House League: 7pm - 10pm",
  16: "",
  17: "",
  18: "",
  19: ``,
  20: "",
  21: ``,
  22: "Adult House League: 7pm - 10pm",
  23: "",
  24: "",
  25: "",
  26: ``,
  27: "",
  28: ``,
  29: "Adult House League: 7pm - 10pm",
  30: "",
  31: "",
};

$(document).ready(function () {
  // Display july calendar
  $("#july").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $("#july").addClass("is-active");
    $("#june").removeClass("is-active");
    $("#august").removeClass("is-active");
    $(".june-calendar").addClass("invisible");
    $(".august-calendar").addClass("invisible");
    $(".july-calendar").removeClass("invisible");
  });

  // Display June calendar
  $("#june").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $("#june").addClass("is-active");
    $("#july").removeClass("is-active");
    $("#august").removeClass("is-active");
    $(".july-calendar").addClass("invisible");
    $(".august-calendar").addClass("invisible");
    $(".june-calendar").removeClass("invisible");
  });

  // Display August calendar
  $("#august").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $("#august").addClass("is-active");
    $("#july").removeClass("is-active");
    $("#june").removeClass("is-active");
    $(".july-calendar").addClass("invisible");
    $(".june-calendar").addClass("invisible");
    $(".august-calendar").removeClass("invisible");
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

  //august
  $(".days-august").append(() => {
    //empty days
    let emptyDays = "<li></li>";
    emptyDays = emptyDays.repeat(AUGUST.daysBeforeStart); //DONT NEED BECAUSE 0 DAYS

    //full days
    let daysHtml = "";
    for (let i = 1; i <= AUGUST.daysInMonth; i++) {
      daysHtml += `<li> ${i} <p>${AUGUST[i]}</p></li>`;
    }

    return emptyDays + daysHtml;
  });
});
