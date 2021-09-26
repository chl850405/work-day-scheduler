var currentDate = 'nowformat'
var format = 'MM-DD-YYYY';
var now = moment();
console.log(currentDate)

$("#currentDay").text(moment().format('dddd MMMM Do YYYY,h:mm a'));

// $('document').ready(function() {
//     //Defines Current Moment
// var now = moment();
// //Defines current Date
// var currentDate = moment().format("MM/DD/YYYY");


//     if (currentDate < now){
//         $(document).css('past');
//         console.log(currentDate)
//     }
    // for (let i = 9; i < 9; i++) {
    //     //Row
    //     var row = $(`div data-time=[i] id='${i}' class="row"`);
    //     //Time Column
    //     var time = $('<div class="col-sm2"> <p class="hour">' + formatAmPm[i] + '<p>')

    // }
// });