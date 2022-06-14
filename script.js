var today = moment();

var times = $(".container");
var date = $("currentDay");

var currentHour = today.hour();

var currentDay;

var isMorning;

//schedule definition for each day, messages are empty
var schedule = [
    {
        time: 9,
        message: "",
    },
    {
        time: 10,
        message: "",
    },
    {
        time: 11,
        message: "",
    },
    {
        time: 12,
        message: "",
    },
    {
        time: 1,
        message: "",
    },
    {
        time: 2,
        message: "",
    },
    {
        time: 3,
        message: "",
    },
    {
        time: 4,
        message: "",
    },
    {
        time: 5,
        message: "",
    }
];

function Day(){
    //will distinguish hour in the day and if it is morning or evening
    if (currentHour >= 12){
        isMorning = false;
        if (currentHour > 12 ){
            currentHour = currentHour - 12;
        }
    }else{
        isMorning = true;
    }
    times.addClass('mb-3');
    //goes through necessary hours for work day
    for (var i = 9; i < 12; i ++){
        Hour(i, true);
    }
    Hour(12, false);
    for(var i = 12; i < 6; i++){
        Hour(i, false);
    }

    //sets today's date format
    date.text(today.format("MMM Do, YYYY"));

    currentDay = JSON.parse(localStorage.getItem('schedule'));

    if(currentDay == null){
        currentDay = schedule;
    }

    for (i=0; i<times.children().length; i++){
        times.children().eq(i).children().eq(1).children().first.val(currentDay[i].message);
    }

};

function Hour(hour, morning){
    var div = $('<div>');
    div.addClass('time-block');
    div.addClass('row');
    div.addClass('col-sm-12');

    var p = $('<p>');
    p.addClass('hour');

    if(morning){
        p.text(hour + "a.m.");
    }else{
        p.text(hour + "p.m.");
    }
    p.addClass('col-sm-1');

    var form = $('<form>');
    var input = $('<textarea>');
    input.addClass('w-100 h-100');

    if(morning && isMorning){
        if(currentHour > hour){
            input.addClass('past');
        }
        else if(currentHour == hour){
            input.addClass('present');
        }else{
            input.addClass('future');
        }
    }

    else if(!morning && !isMorning ){
        if (currentHour == 12 || hour ==12 ){
            if(currentHour == 12 && hour != 12){
                input.addClass('future');
            }
            else if(currentHour == 12 && hour ==12){
                input.addClass('present');
            }
            else{
                input.addClass('past');
            }
        }
        else if(currentHour > hour){
            
        }
        
    }






    Day();
}