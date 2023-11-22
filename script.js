// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. $(document).ready() is a jQuery function that wraps code to ensure that
// the code isn't run until the browser has finished rendering all the elements
var saveBtn = $(".saveBtn");
var textArea = $(".textarea");
const currentHour = dayjs().get("hour");
const currentDate = dayjs().format("MMMM DD, YYYY");
console.log(currentHour);
console.log(currentDay);
$(document).ready();

saveBtn.click(function () {
  var parent = $(this).parent().attr("id");
  var sibling = $(this).siblings("textarea").val();
  console.log($(this).parent().attr("id"));
  localStorage.setItem(parent, sibling);
  console.log(sibling);
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id"));

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

$(".time-block").each(function () {
  var id = $(this).attr("id");
  var savedUserInput = localStorage.getItem(id);
  $(this).children("textarea").val(savedUserInput);
});
// Got the above code from Copilot. As I understand it "THIS CODE IS SAYING:
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
document.querySelector("h1").textContent = currentDate;
// if (interger === true)
// console.log (textArea)
// else if (interger === false)
