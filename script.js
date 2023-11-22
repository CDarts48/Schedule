var saveBtn = $(".saveBtn");
var textArea = $(".textarea");
const currentHour = dayjs().get("hour");
const currentDate = dayjs().format("MMMM DD, YYYY");
console.log(currentHour);
$(document).ready();
{
  saveBtn.click(function () {
    var parent = $(this).parent().attr("id");
    var sibling = $(this).siblings("textarea").val();
    console.log($(this).parent().attr("id"));
    localStorage.setItem(parent, sibling);
    console.log(sibling);
  });

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(this);
    if (blockHour < currentHour) {
      $(this).children("textarea").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var savedUserInput = localStorage.getItem(id);
    $(this).children("textarea").val(savedUserInput);
  });
}
// Got the above code from Copilot. As I understand it, This code is saying: Slect the html element time block and for each time block set two variables (id and savedUserInput) the id var is selected by the div which has a id attribute the saveUserInput variable is getting the id item from local storage for each time block. Then the children of the div .time-block are having their text areas set to the savedUserInput variable, which is retrieving the id item from local storage for each time block. "

document.querySelector("h1").textContent = currentDate;
