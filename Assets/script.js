//hour times in the HTML
let hour9 = $("#hour-9");
let hour10 = $("#hour-10");
let hour11 = $("#hour-11");
let hour12 = $("#hour-12");
let hour13 = $("#hour-13");
let hour14 = $("#hour-14");
let hour15 = $("#hour-15");
let hour16 = $("#hour-16");
let hour17 = $("#hour-17");

let hoursWorkDay = [
  hour9,
  hour10,
  hour11,
  hour12,
  hour13,
  hour14,
  hour15,
  hour16,
  hour17,
];

$(document).ready(function () {
  //Added code to display the current date in the header of the page.
  let time = dayjs();
  $("#currentDay").text(time.format("dddd, MMMM DD HH:mmA"));
  //We start by having the array hoursWordDay put into a loop.
  $(hoursWorkDay).each(function (index, hourElement) {
    // create variable current hour from the dayjs function and get the hour only//
    //we then create a variable called blockHour to get the id number of the time-block//
    let currentHour = dayjs().hour();
    let blockHour = parseInt(hourElement.attr("id").split("-")[1]);
    //then we put logic to put the apopriate css style in the hour element by remvoing and
    //placing a new class in it.
    if (currentHour === blockHour) {
      hourElement.removeClass("future");
      hourElement.addClass("present");
    } else if (currentHour > blockHour) {
      hourElement.removeClass("future");
      hourElement.addClass("past");
    } else {
      hourElement.addClass("future");
    }
  });
});