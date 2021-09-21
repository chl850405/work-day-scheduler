
//Defines Current Moment
var now = moment();
//Defines current Date
var currentDate = now.format("MM/DD/YYYY");

//Current Date
$("#currentDay").text("Today's Date" + currentDate);
console.log(Date);

//Rows With Displayed Time Event and Save Button
$(document).ready(function() {
    for (let i = 9; i < 9; i++) {
        //Row
        var row = $(`div data-time={i} id='${i}' class="row"`);
        //Time Column
        var time = $('<div class="col-sm2"> <p class="hour">' + formatAmPm{i} + '<p>')

    }
//Time Display by Hour
function formatAmPm() {
    var ampm = hours >= 12 ? 'am' : 'pm';
    hours = hours %12;
    hours = hours ? hours : 12;
    return hours + ampm
    
}
console.log (time);
})