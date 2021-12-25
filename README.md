#work-day-scheduler
* daily scheduler to add important events to a daily planner
that can manage time effectively

#Built with HTML CSS JavaScript 

#Third Party API's used Moment.js Bootstrap Font-Awesome jQuery Google-Fonts


##WHEN I open the planner
THEN the current day is displayed at the top of the calendar

* var now = moment();

$("#currentDay").text(moment().format('dddd MMMM Do YYYY,h:mm a'));

##WHEN I scroll down
THEN I am presented with time blocks for standard business hours

* function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12; 
        hours = hours ? hours : 12;
        return hours + ampm;
    }

##WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is 
in the past, present, or future

* if (currentHour > hour ) {
        //selected hour is in the past
        return "past";
        
        } else if (currentHour < hour) {
            // selected hour is in the future
            return "future";
        
        } else if ( currentHour == hour) {
            // selected hour is current
            return "present";
    }

##WHEN I click into a time block
THEN I can enter an event

* var task = $(`<div class="col-sm-9 ${indication(i, now.hour())}"><div><label for="formControlTextarea"></label><textarea class="form-control" id="${i}-formControlTextarea" rows="3"></textarea></div>`);

##WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

* $('.saveBtn').on('click', function()

WHEN I refresh the page
THEN the saved events persist

* localStorage.getItem(`${i}`);

GitHub URL

https://github.com/chl850405/work-day-scheduler.git

Deployed URL

https://chl850405.github.io/work-day-scheduler/


just upload the .gif file into your base folder of GitHub and edit README.md just use this code

![](./assets/gif/workday-scheduler.gif)
