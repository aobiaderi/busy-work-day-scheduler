// Moment declaration for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Returns current time to the nearest hour - 10:30 becomes 11:00
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, "hours");

// Function to compare hour slots with current time 
// Update these to coordinating numbers
function testTime() {
    // Add time1 9AM
    time1 = moment().startOf('day').add(9, "hours");
    // Adjust the current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add if/else statement for time1 
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
    // Add time2 10AM
    time2 = moment().startOf('day').add(10, "hours");
    // Add if/else statements for time2
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    }
};