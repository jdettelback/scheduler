$(function () {
  $(".saveBtn").click(function () {
    var key = $(this).parent().attr("id");
    var calendarEntry = $("#" + key);
    var calText = calendarEntry.children("textarea");
    var text = calText.val();
    alert(text);

    localStorage.setItem(key, text);
  });

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

  console.log(keys);
  refreshAgenda();

  var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY"));

  });
