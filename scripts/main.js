$(document).ready(function () {
  const TODAY = new Date();
  const START_REGISTRATION_OUTAGE = new Date(2021, 7, 10);
  const END_REGISTRATION_OUTAGE = new Date(2021, 07, 22);

  console.log(TODAY);

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".delete").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".modal").toggleClass("is-active");
  });
  $(".open").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".modal").toggleClass("is-active");
  });
  $(".faq").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".modal").toggleClass("is-active");
  });

  //DISPLAY OUTAGE NOTFICATION
  // if (TODAY >= START_REGISTRATION_OUTAGE && TODAY <= END_REGISTRATION_OUTAGE) {
  //   $(".closed-notification-message").removeClass("invisible");
  //   console.log("In outage");
  // }
});

//.attr('id', '' + i + j);
