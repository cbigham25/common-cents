// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
    // Add event listener to all save buttons
    $(".saveBtn").on("click", function () {
      // Get the user input from the textarea
      var userInput = $(this).siblings(".description").val();
  
      // Get the time-block id
      var timeBlockId = $(this).parent().attr("id");
  
      // Save the user input to local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $(document).ready(function() {
    // Get the current hour using dayjs
    var currentHour = dayjs().hour();
  
    // Loop through each time-block
    $(".time-block").each(function() {
      // Get the hour from the time-block's id
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      // If the block hour is less than the current hour, add the "past" class
      if (blockHour < currentHour) {
        $(this).addClass("past");
      }
      // If the block hour is equal to the current hour, add the "present" class
      else if (blockHour === currentHour) {
        $(this).addClass("present");
      }
      // If the block hour is greater than the current hour, add the "future" class
      else {
        $(this).addClass("future");
      }
    });
  });