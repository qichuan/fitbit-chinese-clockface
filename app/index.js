import document from "document";
import clock from "clock";
import * as messaging from "messaging";
import { calendar } from "./lunar_calendar";
import { numToImage } from "./utils";
import * as settings from "./settings";

let timePage = document.getElementById("timePage");

let lunarDateTextLine1 = document.getElementById("lunarDateTextLine1"); 
let lunarDateTextLine2 = document.getElementById("lunarDateTextLine2"); 

let lunarYearTextLine1 = document.getElementById("lunarYearTextLine1");
let lunarYearTextLine2 = document.getElementById("lunarYearTextLine2");

let noramlWeekDay = document.getElementById("noramlWeekDay");

let normalDateTextLine1 = document.getElementById("normalDateTextLine1");
let normalDateTextLine2 = document.getElementById("normalDateTextLine2");

// The clock numbers
let hourNumber1 = document.getElementById("hour_num_1");
let hourNumber2 = document.getElementById("hour_num_2");
let minuteNumber1 = document.getElementById("minute_num_1");
let minuteNumber2 = document.getElementById("minute_num_2");

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let UPDATE_INTERVAL = 86400000 //24 Hours

var lastLunarCalculationDate = 0;
var lunarDate = null;

// Listen to clock tick event in one minute interval
clock.granularity = 'minutes'; // seconds, minutes, hours
clock.ontick = function(evt) {
    let hours = evt.date.getHours();
    let minutes = evt.date.getMinutes();

    let hoursText = ("0" + hours).slice(-2);
    let minutesText = ("0" + minutes).slice(-2);

    hourNumber1.href = numToImage(hoursText[0], true);
    hourNumber2.href = numToImage(hoursText[1], true);
    
    minuteNumber1.href = numToImage(minutesText[0], false);
    minuteNumber2.href = numToImage(minutesText[1], false);
    
    let date = evt.date;
    if (lastLunarCalculationDate == 0 
        || lunarDate == null
        // More than one day
        || (date.getTime() - lastLunarCalculationDate.getTime() > UPDATE_INTERVAL)
        // Just after midnight
        || (hours == 0 && minutes == 0)) {
        // Perform calculation
        lunarDate = calendar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
        console.log("Performed calculation at " + date);
        lastLunarCalculationDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
        console.log("Last calculation date is " + lastLunarCalculationDate);
    }

    if (lunarDate) {
        lunarDateTextLine1.text = lunarDate.IMonthCn;
        lunarDateTextLine2.text = lunarDate.IDayCn;

        lunarYearTextLine1.text = lunarDate.gzYear;
        lunarYearTextLine2.text = lunarDate.Animal + "年";

        noramlWeekDay.text = lunarDate.ncWeek;

        let normalDateString = ("0" + date.getDate()).slice(-2) + " " + months[date.getMonth()];
        normalDateTextLine1.text = normalDateString;
        normalDateTextLine2.text = date.getFullYear();
    }
    
};

function changeClockNumberColor(newFillColor) {
    hourNumber1.style.fill = newFillColor;
    hourNumber2.style.fill = newFillColor;
    minuteNumber1.style.fill = newFillColor;
    minuteNumber2.style.fill = newFillColor;
}

/* -------- SETTINGS -------- */
function settingsCallback(data) {
    if (!data) {
      return;
    }
    if(data.clockNumberColor) {
        changeClockNumberColor(data.clockNumberColor);
    }
}
settings.initialize(settingsCallback);