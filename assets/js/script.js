//Declare Variables

// Variable for the save button
var saveBtn = $(".saveBtn");
// Variable for the current hour 
var currentHour = moment().format("HH"); 
// This variable parses the hour so it returns as an integer
var currentHourInt = parseInt(currentHour); 

// Set data attributes to each hour input element 
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));


$(document).ready(function () {

    // Function to store user input 
    showUserInput();
    
    // Show Date and Time in jumbotron section 
    
    function addDate() { 
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    
    // Update the time every second or minute
    } setInterval(addDate, 1000);
    
        addDate();
    
    // Loop through to add attributes for each input to reflect the current hour and Change the corresponding color in each row 
    for (var i = 0; i <= 12; i++) {  
    
    // Variable for the hour of the row
        var inputHour = $("#" + i + "Row").attr("data-time");  
    
        // Parses the hour so it returns as an integer
        var inputHourInt = parseInt(inputHour); 
        
    // If statement to add a class attribute and apply red color if time is within the present hour
        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("present"); 
        }
    
    // If statement to add a class attribute and apply grey color if time is is in the past
        if (currentHourInt > inputHourInt) {  
            $("#" + i + "Row").addClass("past");
        }
    // If statement to add a class attribute and apply green color if time is is in the future
    
        if (currentHourInt < inputHourInt) { 
            $("#" + i + "Row").addClass("future");
        }
    }
    
    // Stores data locally when user clicks on the save button
    saveBtn.on("click", function () { 
    
        var rowHour = $(this).attr("data-hour"); // variable referencing the assigned hour row in the html doc 
        var input = $("#" + rowHour + "Row").val(); // saves the text that has been entered into the input column 
        localStorage.setItem(rowHour, input); //saves input to local storaage
    });
    
    //  For loop to retrieve the stored data that was saved for each input 
    function showUserInput() {
        for (var i = 0; i <= 12; i++) {
        $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }
    });