// Sets up dayjs which will grab current date/time
var currentTime = dayjs().format('dddd, MMMM D, HH:mm');
// Saves the HTML ID currentDay to a variable
var displayDate = $('#currentDay');
// updates the currentDay ID to display the currentTime var as text on the page
displayDate.text(currentTime);

// Function to add past, present and future classes to time blocks
function changeBackgroundColor() {
  var timeAsInt = parseInt(dayjs().format('H'));
  console.log(timeAsInt);
  var timeBlocks = $('.time-block');

  for (var timeSection of timeBlocks) {
    var slotId = timeSection.id;
    var idNumber = parseInt(slotId.split("-")[1]);

    if (idNumber < timeAsInt) {
      $(timeSection).addClass('past');
    } else if (idNumber === timeAsInt) {
      $(timeSection).addClass('present');
    } else {
      $(timeSection).addClass('future');
    }
  }
}
changeBackgroundColor();

// Saves time-block ID as a variable
var hours = $('.time-block');
// Adds a click event to the time blocks to save data to the local storage
hours.click(function(event) {
  event.preventDefault();
  localStorage.setItem($(this).attr('id'), $(this).find('textarea').val());
});

// Function that pulls data from local storage and renders it to the time slots
function displaySavedData() {
  var timeBlocks = $('.time-block');

  for (var timeSection of timeBlocks) {
    var slotId = timeSection.id;

    var agenda = localStorage.getItem(slotId);
    $(timeSection).find('textarea').val(agenda);
  }
}

displaySavedData();