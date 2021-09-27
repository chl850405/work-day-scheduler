var currentDate = 'now + format'
var format = 'MM-DD-YYYY';
var now = moment();
console.log(currentDate)



$("#currentDay").text(moment().format('dddd MMMM Do YYYY,h:mm a'));

$('document').ready(function() {
    // //saves task to local storage
    var schedule = JSON.parse(localStorage.getItem('schedule'));
    localStorage.setItem('schedule', JSON.stringify(schedule));
    
    
    //creates 9 rows
    for (let i = 9; i < 18; i++) {
        // //Row
        var row = $('<div class="row"></div>');
        //Time Column
        var time = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');
        // var time = $('<div class="col-sm-2 hour"></div>');
        //Event
        var task = $('<div class="col-sm-9 textarea"><div>');

        var save = $('<div class="col-sm-1 saveBtn"><button class=""><i class="fas fa-lock"></i></button></div>');

        
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
});