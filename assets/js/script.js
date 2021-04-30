// Function that runs javascript code only once page has fully loaded
$(document).ready(function () {
  // Current day variable declaration and display
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);

  // Gets current time and parses to int
  var currentTimeString = moment().format("H");
  var currentTime = parseInt(currentTimeString);

  // Array of each time section
  var hour = [
    $(".AM9"),
    $(".AM10"),
    $(".AM11"),
    $(".PM12"),
    $(".PM1"),
    $(".PM2"),
    $(".PM3"),
    $(".PM4"),
    $(".PM5"),
  ];

  // Compares current time with schedule events to change color for each event accordingly
  var t = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  for (i = 0; i < t.length; i++) {
    if (currentTime > t[i]) {
      hour[i].css("background", " #d3d3d3");
    }
    if (currentTime === t[i]) {
      hour[i].css("background", "#ff6961");
    }
  }

  // Stores the event input text into the local storage
  $(".s1").on("click", function () {
    localStorage.setItem("event1", $(".e1").val());
  });
  $(".s2").on("click", function () {
    localStorage.setItem("event2", $(".e2").val());
  });
  $(".s3").on("click", function () {
    localStorage.setItem("event3", $(".e3").val());
  });
  $(".s4").on("click", function () {
    localStorage.setItem("event4", $(".e4").val());
  });
  $(".s5").on("click", function () {
    localStorage.setItem("event5", $(".e5").val());
  });
  $(".s6").on("click", function () {
    localStorage.setItem("event6", $(".e6").val());
  });
  $(".s7").on("click", function () {
    localStorage.setItem("event7", $(".e7").val());
  });
  $(".s8").on("click", function () {
    localStorage.setItem("event8", $(".e8").val());
  });
  $(".s9").on("click", function () {
    localStorage.setItem("event9", $(".e9").val());
  });
});

// Once a save button is clicked changes isSaved to true and returns it
$(".save").on("click", function () {
  var isSaved = true;
  return isSaved;
});

// If isSaved=true then gets input text values from local storage and makes the event text value persist.
if ($(".save")) {
  var event = localStorage.getItem("event1");
  $(".e1").text(event);

  var event = localStorage.getItem("event2");
  $(".e2").text(event);

  var event = localStorage.getItem("event3");
  $(".e3").text(event);

  var event = localStorage.getItem("event4");
  $(".e4").text(event);

  var event = localStorage.getItem("event5");
  $(".e5").text(event);

  var event = localStorage.getItem("event6");
  $(".e6").text(event);

  var event = localStorage.getItem("event7");
  $(".e7").text(event);

  var event = localStorage.getItem("event8");
  $(".e8").text(event);

  var event = localStorage.getItem("event9");
  $(".e9").text(event);

  // Updates value
  isSaved = false;
}
