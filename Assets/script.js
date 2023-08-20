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
  //save button when clicked, creates variable description. it then accesses the current element,
  //and asks for the sibling descripton and asks attains its value. we creat variable block id
  //it accesses the current block and asks for the closest time-block class and its id name.
  //these variabels then are stored in the local storage to bring out at another time.
  $(".btn").on("click", function () {
    let description = $(this).siblings(".description").val();
    let blockID = $(this).closest(".time-block").attr("id");
    localStorage.setItem(blockID, description);
  });

  //we are putting the saved data that is located in the local storage back into the correct blockId.
  //we create variabel blockId and attain the hourelemnt id
  //we create variable savedDescription and dfine it as out saved values in the local storage
  //we then find the hourElement class description and put in the value of the local storage item.
  $(hoursWorkDay).each(function (index, hourElement) {
    let blockId = hourElement.attr("id");
    let savedDescription = localStorage.getItem(blockId);
    hourElement.find(".description").val(savedDescription);
  });
});
