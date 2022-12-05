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
      keys.push($(this).attr("id"));
    });

  console.log(keys);
  refreshAgenda();

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  
  // TODO: Add code to display the current date in the header of the page.
});

$;
