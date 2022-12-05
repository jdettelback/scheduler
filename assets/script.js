$(function () {

  // Function to save text entered into scheduler 

  $(".saveBtn").click(function () {
    var key = $(this).parent().attr("id");
    var calendarEntry = $("#" + key);
    var calText = calendarEntry.children("textarea");
    var text = calText.val();

    localStorage.setItem(key, text);
  });

  // Function to re-add text already saved upon refresh

  function refreshAgenda() {
    for (var k of keys) {
      var result = localStorage.getItem(k);
      if (result != null) {
        var calendarEntry = $("#" + k);
        var calText = calendarEntry.children("textarea");
        calText.val(result);
      }
    }
  }

  // Determines current time and adds correct class to time block to change background color

  var keys = [];
  $("#agenda")
    .children()
    .each(function (index) {
      var id = $(this).attr("id");
      keys.push(id);
      var hour = id.substr(5);
      var hourInt = parseInt(hour);
      var time = dayjs().hour();

      if (hourInt == time) {
        $(this).addClass("present");
      } else if (hourInt < time) {
        $(this).addClass("past");
      } else $(this).addClass("future");
    });

  refreshAgenda();

  var today = dayjs();
  $("#currentDay").text(today.format("MMMM D, YYYY"));
});
