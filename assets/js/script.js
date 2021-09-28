var now = moment();

$("#currentDay").text(moment().format('dddd MMMM Do YYYY,h:mm a'));

// //saves task to local storage
var saveTasks = function() {
    localStorage.getItem('schedule');

    localStorage.setItem('schedule', schedule);
}

$('document').ready(function() {
    var schedule = "dailyTask"

    //creates 9 rows
    for (let i = 9; i < 18; i++) {
        // //Row
        var row = $('<div class="row"></div>');
        //Time Column
        var time = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');
        // var time = $('<div class="col-sm-2 hour"></div>');
        //Event
        var task = $(`<div class="col-sm-9 ${indication(i, now.hour())}"><div><label for="formControlTextarea"></label><textarea class="form-control" id="${i}-formControlTextarea" rows="3"></textarea></div>`);

        var save = $(`<div class="col-sm-1"><button id=${i} class="saveBtn"><i class="fas fa-lock"></i></button></div>`);
        

        
        row.append(time, task, save);
        $(".container").append(row);
    }
    //creates time stamp
    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    function indication(hour, currentHour) {

    if (currentHour > hour ) {
        //selected hour is in the past
        return "past";
        
        } else if (currentHour < hour) {
            // selected hour is in the future
            return "future";
        
        } else if ( currentHour == hour) {
            // selected hour is current
            return "present";
    }

}//save when button is clicked
$('.saveBtn').on('click', function() {
    var currentSelction =$(this).attr("id")
    var textInput = $(`#${currentSelction}-formControlTextarea`).val()

    //saves task to local storage
    localStorage.setItem(currentSelction, textInput);
    console.log("save")
});
});

