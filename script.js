var today = moment();

var times = $(".container");
var date = $("currentDay");

var currentHour = today.hour();

var currentDay;

var morning;

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
    if (currentHour >= 12){
        morning = false;
        if (currentHour > 12 ){
            currentHour = currentHour - 12;
        }
    }else{
        morning = true;
    }
}