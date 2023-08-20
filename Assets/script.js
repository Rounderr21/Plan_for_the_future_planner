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
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD HH:mmA"));

  console.log(hoursWorkDay[0].text());

});